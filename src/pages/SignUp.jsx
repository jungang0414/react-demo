import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
//firebase
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customerError, setCustomerError] = useState("");

  //註冊函數
  const signUpWithEmail = async () => {
    try {
      //檢查輸入狀態
      if (customerEmail.trim() === "" || customerPassword.trim() === "") {
        setCustomerError("請輸入完整資料");
        return;
      }

      //註冊
      await createUserWithEmailAndPassword(
        auth,
        customerEmail,
        customerPassword
      );

      //註冊成功則將表單清空
      setCustomerEmail("");
      setCustomerPassword("");
      setCustomerError("註冊成功");
    } catch (error) {
      //顯示錯誤訊息
      if (error.code === "auth/email-already-in-use") {
        setCustomerError("此信箱已被註冊");
      } else {
        setCustomerError("註冊失敗");
      }
    }
  };
  
  return (
    <div className="flex flex-col gap-3 items-center mt-5">
      <div className="error">{customerError}</div>
      <p>表單</p>
      <Input
        isRequired
        value={customerEmail}
        type="name"
        label="name"
        className="max-w-xs"
        onChange={(e) => setCustomerEmail(e.target.value)}
      />
      <Input
        isRequired
        value={customerPassword}
        type="password"
        label="password"
        className="max-w-xs"
        onChange={(e) => setCustomerPassword(e.target.value)}
      />
      <div className="flex gap-2">
        <Button onClick={signUpWithEmail} color="primary">
          註冊
        </Button>
      </div>
    </div>
  );
}
