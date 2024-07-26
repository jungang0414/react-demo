import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
//firebase
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

function SignIn() {
  //登入表單的狀態
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customerError, setCustomerError] = useState("");

  //跳轉函數
  const navigate = useNavigate();

  //登入函數
  const signInWithEmail = async () => {
    try {
      setCustomerError("");

      //檢查輸入狀態
      if (customerEmail.trim() === "" || customerPassword.trim() === "") {
        setCustomerError("請輸入完整資料");
        return;
      }

      await signInWithEmailAndPassword(auth, customerEmail, customerPassword);

      //登入成功則將表單清空
      setCustomerEmail("");
      setCustomerPassword("");
      setCustomerError("登入成功");
    } catch (error) {
      //顯示錯誤訊息
      if (error.code === "auth/user-not-found") {
        setCustomerError("找不到使用者");
      } else if (error.code === "auth/wrong-password") {
        setCustomerError("密碼錯誤");
      } else if (error.code === "auth/invalid-credential") {
        setCustomerError("此信箱不存在，請註冊");
      } else {
        setCustomerError("登入失敗");
      }
    }
  };

  //登入狀態
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <div className="flex justify-center mt-5">
          已登入，即將跳轉至首頁....
        </div>
      ) : (
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
            <Button onClick={signInWithEmail} color="primary">
              登入
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;
