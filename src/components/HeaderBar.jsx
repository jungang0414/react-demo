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
  };

  //側邊欄位設定
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Product",
      href: "/product",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Cart",
      href: "/cart",
    },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="between">
        <NavbarItem>
          <Link href="/product" aria-current="page">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/dashboard" aria-current="page">
            Dashborad
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cart" aria-current="page">
            Cart
          </Link>
        </NavbarItem>
      </NavbarContent>
      {user ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" onClick={signOut} variant="flat">
              Sign Out
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/signin" variant="flat">
              Sign In
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
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
