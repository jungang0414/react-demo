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
import { addIncart } from "../features/slices/incartSlice";
import { useRef } from "react";

export default function Product() {
  //取出redux的資料
  const cakeCount = useSelector((state) => state.cake.cakeCount);
  const cakeName = useSelector((state) => state.cake.cakeName);
  const teaCount = useSelector((state) => state.tea.teaCount);
  const teaName = useSelector((state) => state.tea.teaName);
  const coffeeCount = useSelector((state) => state.coffee.coffeeCount);
  const coffeeName = useSelector((state) => state.coffee.coffeeName);
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

  //加入購物車函數
  const addCakeToCart = () => {
    if (!buyCakeQtyRef.current.value || buyCakeQtyRef.current.value <= 0) {
      alert("請輸入數量");
      return;
    }
    if (cakeCount < buyCakeQtyRef.current.value) {
      alert("數量不足");
      return;
    }
    const newItem = {
      name: cakeName,
      count: buyCakeQtyRef.current.value,
      price: 100,
    };
    alert(`${newItem.name} 已加入購物車, 數量: ${newItem.count}`);
    dispatch(addIncart(newItem));
  };

  const addTeaToCart = () => {
    if (buyTeaQtyRef.current.value === "") {
      alert("請輸入數量");
      return;
    }
    const newItem = {
      name: teaName,
      count: buyTeaQtyRef.current.value,
      price: 50,
    };
    alert(`${newItem.name} 已加入購物車, 數量: ${newItem.count}`);
    dispatch(addIncart(newItem));
  };

  const addCoffeeToCart = () => {
    if (buyCoffeeQtyRef.current.value === "") {
      alert("請輸入數量");
      return;
    }
    const newItem = {
      name: coffeeName,
      count: buyCoffeeQtyRef.current.value,
      price: 80,
    };
    alert(`${newItem.name} 已加入購物車, 數量: ${newItem.count}`);
    dispatch(addIncart(newItem));
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>商品</TableColumn>
        <TableColumn>單價</TableColumn>
        <TableColumn>剩餘數量</TableColumn>
        <TableColumn>購買數量</TableColumn>
        <TableColumn>操作1</TableColumn>
        <TableColumn>操作2</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>{cakeName}</TableCell>
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
            <button onClick={addCakeToCart}>加入購物車</button>
          </TableCell>
          <TableCell>
            <button onClick={byCakeOrder}>直接購買</button>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>{teaName}</TableCell>
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
            <button onClick={addTeaToCart}>加入購物車</button>
          </TableCell>
          <TableCell>
            <button onClick={byTeaOrder}>直接購買</button>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>{coffeeName}</TableCell>
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
            <button onClick={addCoffeeToCart}>加入購物車</button>
          </TableCell>
          <TableCell>
            <button onClick={byCoffeeOrder}>直接購買</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
