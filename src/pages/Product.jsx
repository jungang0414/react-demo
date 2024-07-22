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

import { useRef } from "react";

export default function Product() {
  //取出redux的資料
  const cakeCount = useSelector((state) => state.cake.cakeCount);
  const teaCount = useSelector((state) => state.tea.teaCount);
  const coffeeCount = useSelector((state) => state.coffee.coffeeCount);
  const dispatch = useDispatch();

  //購買商品
  const buyCakeQtyRef = useRef(null);
  const buyTeaQtyRef = useRef(null);
  const buyCoffeeQtyRef = useRef(null);

  const byCakeOrder = () => {
    const send = {
      qty: buyCakeQtyRef.current.value || 0,
    };
    dispatch(buyCake(send));
  };

  const byTeaOrder = () => {
    const send = {
      qty: buyTeaQtyRef.current.value || 0,
    };
    dispatch(buyTea(send));
  };

  const byCoffeeOrder = () => {
    const send = {
      qty: buyCoffeeQtyRef.current.value || 0,
    };
    dispatch(buyCoffee(send));
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>商品</TableColumn>
        <TableColumn>單價</TableColumn>
        <TableColumn>剩餘數量</TableColumn>
        <TableColumn>購買數量</TableColumn>
        <TableColumn>操作</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>蛋糕</TableCell>
          <TableCell>100</TableCell>
          <TableCell>{cakeCount}</TableCell>
          <TableCell>
            <input
              className="w-10"
              type="number"
              placeholder="數量"
              ref={buyCakeQtyRef}
            />
          </TableCell>
          <TableCell>
            <button onClick={byCakeOrder}>確認</button>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>茶</TableCell>
          <TableCell>50</TableCell>
          <TableCell>{teaCount}</TableCell>
          <TableCell>
            <input
              className="w-10"
              type="number"
              placeholder="數量"
              ref={buyTeaQtyRef}
            />
          </TableCell>
          <TableCell>
            <button onClick={byTeaOrder}>確認</button>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>咖啡</TableCell>
          <TableCell>80</TableCell>
          <TableCell>{coffeeCount}</TableCell>
          <TableCell>
            <input
              className="w-10"
              type="number"
              placeholder="數量"
              ref={buyCoffeeQtyRef}
            />
          </TableCell>
          <TableCell>
            <button onClick={byCoffeeOrder}>確認</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
