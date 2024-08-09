import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { query, collection, onSnapshot, addDoc } from "firebase/firestore";

//firebase Auth Chrck
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

import { Input } from "@nextui-org/input";

const TableData = ({ userLists }) => {
  console.log(userLists);

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Phone</TableColumn>
        <TableColumn>Profeesion</TableColumn>
      </TableHeader>
      <TableBody>
        {userLists.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.profeesion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

function Employee() {
  const [userList, setUserList] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (loading) return;
    setIsAuthChecked(true);
  }, [loading]);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "customs"));
      onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setUserList(data);
      });
    }
  }, [user]);
  const lastId = userList.length;
  console.log(lastId);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profeesion, setProfeesion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = lastId + 1;
    try {
      await addDoc(collection(db, "customs"), {
        id,
        name,
        phone,
        profeesion,
      });
      setName("");
      setPhone("");
      setProfeesion("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  if (!isAuthChecked) {
    return (
      <div className="text-center mt-2">
        <p>加載中...</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center mt-5">
        {user !== null ? (
          <div>
            <p>已登入</p>
            <h2>{user.email}</h2>
            <div className="mt-2">新增表單內容</div>
            <form
              onSubmit={handleSubmit}
              className="p-4 flex flex-col gap-2 items-center"
            >
              <Input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Profeesion"
                type="text"
                value={profeesion}
                onChange={(e) => setProfeesion(e.target.value)}
              />
              <button className="border rounded-lg w-1/2">新增</button>
            </form>
            <TableData userLists={userList} />
          </div>
        ) : (
          <div>
            <p>尚未登入請登入</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Employee;
