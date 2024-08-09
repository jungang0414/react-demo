import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const lists = [
    {
      title: "Product",
      img: "https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/product",
    },
    {
      title: "Dashboard",
      img: "https://plus.unsplash.com/premium_photo-1661405432649-3ae63605a463?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/dashboard",
    },
    {
      title: "Cart",
      img: "https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/cart",
    },
    {
      title: "firebase",
      img: "https://plus.unsplash.com/premium_photo-1661405432649-3ae63605a463?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/employee",
    },
    {
      title: "TaiwanNew",
      img: "https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      herf: "/taiwannew",
    }
  ];

  return (
    <div className="p-4 gap-2 grid gird-cols-2 md:flex">
      <div className="p-2">
        <h2>
          預設帳號: <span>admin@gmail.com</span>
        </h2>
        <h2>
          預設密碼: <span>123456</span>
        </h2>
      </div>
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
