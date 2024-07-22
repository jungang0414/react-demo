import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCake } from "../features/slices/cakeSlice";
// import { addTea } from "../features/slices/teaSlice";
// import { addCoffee } from "../features/slices/coffeeSlice";

export default function DashBoard() {
  const cakeCount = useSelector((state) => state.cake.cakeCount);
  // const teaCount = useSelector((state) => state.tea.teaCount);
  // const coffeeCount = useSelector((state) => state.coffee.coffeeCount);
  const dispatch = useDispatch();

  //增加商品
  const addCakeRef = useRef(null);
  // const addTeaRef = useRef(null);
  // const addCoffeeRef = useRef(null);

  const addCakeOrder = () => {
    const send = {
      qty: parseInt(addCakeRef.current.value, 10) || 0,
    };
    dispatch(addCake(send));
  };

  // const addTeaOrder = () => {
  //   const send = {
  //     qty: addTeaRef.current.value || 0,
  //   };
  //   dispatch(addTea(send));
  // };

  // const addCoffeeOrder = () => {
  //   const send = {
  //     qty: addCoffeeRef.current.value || 0,
  //   };
  //   dispatch(addCoffee(send));
  // };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>商品</TableColumn>
        <TableColumn>庫存數量</TableColumn>
        <TableColumn>購買數量</TableColumn>
        <TableColumn>操作</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>蛋糕</TableCell>
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
      </TableBody>
    </Table>
  );
}

// <TableRow key="2">
// <TableCell>茶</TableCell>
// <TableCell>{teaCount}</TableCell>
// <TableCell>
//   <input
//     className="w-10"
//     type="number"
//     placeholder="數量"
//     ref={addTeaRef}
//   />
// </TableCell>
// <TableCell>
//   <button onClick={addTeaOrder}>確認</button>
// </TableCell>
// </TableRow>
// <TableRow key="3">
// <TableCell>咖啡</TableCell>
// <TableCell>{coffeeCount}</TableCell>
// <TableCell>
//   <input
//     className="w-10"
//     type="number"
//     placeholder="數量"
//     ref={addCoffeeRef}
//   />
// </TableCell>
// <TableCell>
//   <button onClick={addCoffeeOrder}>確認</button>
// </TableCell>
// </TableRow>
