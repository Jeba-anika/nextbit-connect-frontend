"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import NavbarListItem from "./NavbarListItem";
import {
  MenuFoldOutlined,
  CloseOutlined
} from "@ant-design/icons";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn());
  const { role } = getUserInfo() as any



  const { data, isLoading } = useCategoriesQuery({});
  console.log(data);
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    setIsUserLoggedIn(false);
    // router.push("/login");
  };

  const items: MenuProps["items"] = data?.data.map(
    (category: any, index: number) => ({
      key: index,
      label: <Link href={`/${category.title}`}>{category.title}</Link>,
    })
  );

  return (
    <div className="flex justify-around items-center h-full " >
      <div className="h-full">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" width={200}></Image>
        </Link>
      </div>
      <div className="md:block hidden">
        <ul className="inline">
        <li className="inline">
            <NavbarListItem label="Dashboard" link={`/${role}`} />
          </li>
          <li className="inline">
          <Dropdown menu={{ items }}>
            <a
              className="hover:text-red-600"
              style={{ color: "black", marginRight: "10px", fontWeight: "bold" }}
            >
              <Space wrap size={16}>
                {/* <Avatar size="large" icon={<UserOutlined />} /> */}
                Categories
              </Space>
            </a>
        </Dropdown>
          </li>
          <li className="inline">
            <NavbarListItem label="Services" link="/service" />
          </li>
          <li className="inline">
            <NavbarListItem label="About" link="/about" />
          </li>
          <li className="inline">
          <NavbarListItem label="Contact" link="/contact" />
          </li>
        </ul>
        {isUserLoggedIn ? (
          <Button onClick={logOut} type="text" danger>
            Logout
          </Button>
        ) : (
          <Button type="primary" danger>
            <Link href={"/login"}>Login/ Register</Link>
          </Button>
        )}
      </div>

      <div onClick={()=> setIsMenuOpened(true)} className="text-red-600 text-xl block md:hidden cursor-pointer">
        <MenuFoldOutlined />
      </div>
      <div className={`absolute top-0 right-0 z-50 bg-red-100 w-2/3 h-screen ${isMenuOpened ? "block" : "hidden"}`}>
        <ul className="list-none">
            <li onClick={()=> setIsMenuOpened(false)} className="text-end text-xl pr-10 my-4  text-black font-bold cursor-pointer"><CloseOutlined /></li>
            <li className="shadow"><NavbarListItem label="Dashboard" link={`/${role}`}/></li>
            <li className="shadow">
            <Dropdown menu={{ items }}>
              <a
                className="hover:text-red-600"
                style={{ color: "black", paddingRight: "10px", fontWeight: "bold" }}
              >
                <Space wrap size={16}>
                  {/* <Avatar size="large" icon={<UserOutlined />} /> */}
                  Categories
                </Space>
              </a>
          </Dropdown>
            </li>
            <li className="shadow">
              <NavbarListItem label="Services" link="/service" />
            </li>
            <li className="shadow">
              <NavbarListItem label="About" link="/about" />
            </li>
            <li className="shadow">
            <NavbarListItem label="Contact" link="/contact" />
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
