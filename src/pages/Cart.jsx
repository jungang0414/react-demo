import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

//redux
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/slices/cakeSlice";
import { buyTea } from "../features/slices/teaSlice";
import { buyCoffee } from "../features/slices/coffeeSlice";
//購物車
import { delectIncart, clearIncart } from "../features/slices/incartSlice";
import { useState, useEffect } from "react";


export default function Cart() {
  //取出redux的購物車資料
  const incart = useSelector((state) => state.incart.inCart);
  const dispatch = useDispatch();
  const [inCarted, setInCarted] = useState([]);

  //渲染邏輯
  useEffect(() => {
    setInCarted(incart);
  }, [incart]);

  //刪除購物車商品
  const delectInItem = (item) => {
    dispatch(delectIncart(item));
  };

  //結清購物車
  const clearCart = () => {
    dispatch(clearIncart());
  };

  //總計算
  let totalItem = 0;
  let totalPrice = 0;
  inCarted.forEach((item) => {
    totalItem += parseInt(item.count);
    totalPrice += parseInt(item.count) * parseInt(item.price);
  });

  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>商品</TableColumn>
          <TableColumn>單價</TableColumn>
          <TableColumn>數量</TableColumn>
          <TableColumn>操作</TableColumn>
        </TableHeader>
        <TableBody>
          {inCarted.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>
                <button onClick={() => delectInItem(item)}>刪除</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center items-center mt-2 gap-3">
        <span>總數: {totalItem}</span> <span>總額: {totalPrice}</span>
        <button
          onClick={clearCart}
          className="text-orange-600 border rounded-lg p-2"
        >
          結帳
        </button>
      </div>
    </div>
  );
}
