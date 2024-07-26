import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const lists = [
    {
      title: "Product",
      img: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/product",
    },
    {
      title: "Dashboard",
      img: "https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/dashboard",
    },
    {
      title: "Cart",
      img: "https://plus.unsplash.com/premium_photo-1661405432649-3ae63605a463?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/cart",
    },
  ];
  return (
    <div className="gap-2 grid gird-cols-2">
      {lists.map((list, index) => (
        <Card
          key={index}
          shadow="sm"
          isPressable
          onPress={() => navigate(list.href)}
        >
          <CardBody>
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover"
              src={list.img}
              alt={list.title}
            />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <b>{list.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
