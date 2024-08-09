import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import { AcmeLogo } from "../AcmeLogo";
import { useState } from "react";

//firebase
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //使用者狀態
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
    alert("Sign out successfully");
  };

  //側邊欄位設定
  const menuItems = [
    {
      title: "首頁",
      href: "/",
    },
    {
      title: "商品列表",
      href: "/product",
    },
    {
      title: "商品後台",
      href: "/dashboard",
    },
    {
      title: "串接API",
      href: "/taiwannew",
    },
    {
      title: "購物車",
      href: "/cart",
    },
    {
      title: "資料庫",
      href: "/employee",
    }
  ];
  
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="between">
        <NavbarItem>
          <Link href="/product" aria-current="page">
            商品列表
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cart" aria-current="page">
            購物車
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/taiwannew" aria-current="page">
            串接API
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/dashboard" aria-current="page">
            商品後台
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/employee" aria-current="page">
            資料庫
          </Link>
        </NavbarItem>
      </NavbarContent>
      {user ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" onClick={signOut} variant="flat">
              登出
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/signin" variant="flat">
              登入
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 4
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
