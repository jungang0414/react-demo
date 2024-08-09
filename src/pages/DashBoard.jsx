import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCake } from "../features/slices/cakeSlice";
import { addTea } from "../features/slices/teaSlice";
import { addCoffee } from "../features/slices/coffeeSlice";
//firebase
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function DashBoard() {
  const cakeCount = useSelector((state) => state.cake.cakeCount);
  const cakeName = useSelector((state) => state.cake.cakeName);

  const teaCount = useSelector((state) => state.tea.teaCount);
  const teaName = useSelector((state) => state.tea.teaName);

  const coffeeCount = useSelector((state) => state.coffee.coffeeCount);
  const coffeeName = useSelector((state) => state.coffee.coffeeName);
  const dispatch = useDispatch();

  //增加商品
  const addCakeRef = useRef(null);
  const addTeaRef = useRef(null);
  const addCoffeeRef = useRef(null);

  const addCakeOrder = () => {
    const send = {
      qty: parseInt(addCakeRef.current.value, 10) || 0,
    };
    dispatch(addCake(send));
  };

  const addTeaOrder = () => {
    const send = {
      qty: parseInt(addTeaRef.current.value, 10) || 0,
    };
    dispatch(addTea(send));
  };

  const addCoffeeOrder = () => {
    const send = {
      qty: parseInt(addCoffeeRef.current.value, 10) || 0,
    };
    dispatch(addCoffee(send));
  };

  //使用者登入狀態
  const [user, loading] = useAuthState(auth);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (loading) return;
    setIsAuthChecked(true);
  }, [loading]);

  if (!isAuthChecked) {
    return (
      <div className="text-center mt-2">
        <p>加載中...</p>
      </div>
    );
  }

  return (
    <>
      {user ? (
        <>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>商品</TableColumn>
              <TableColumn>庫存數量</TableColumn>
              <TableColumn>購買數量</TableColumn>
              <TableColumn>操作</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>{cakeName}</TableCell>
                <TableCell>{cakeCount}</TableCell>
                <TableCell>
                  <input
                    className="w-10"
                    type="number"
                    placeholder="數量"
                    ref={addCakeRef}
                  />
                </TableCell>
                <TableCell>
                  <button onClick={addCakeOrder}>確認</button>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>{teaName}</TableCell>
                <TableCell>{teaCount}</TableCell>
                <TableCell>
                  <input
                    className="w-10"
                    type="number"
                    placeholder="數量"
                    ref={addTeaRef}
                  />
                </TableCell>
                <TableCell>
                  <button onClick={addTeaOrder}>確認</button>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>{coffeeName}</TableCell>
                <TableCell>{coffeeCount}</TableCell>
                <TableCell>
                  <input
                    className="w-10"
                    type="number"
                    placeholder="數量"
                    ref={addCoffeeRef}
                  />
                </TableCell>
                <TableCell>
                  <button onClick={addCoffeeOrder}>確認</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <p>尚未登入請登入</p>
        </div>
      )}
    </>
  );
}
