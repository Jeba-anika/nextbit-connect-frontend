"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn());
  const {data, isLoading} = useCategoriesQuery({})
  console.log(data)
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    setIsUserLoggedIn(false);
    // router.push("/login");
  };

  const items: MenuProps["items"] = data?.data.map((category:any,index:number) => ({
    key: index,
    label: <Link href={`/${category.title}`}>{category.title}</Link>
  }))


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link href={"/"}>
        <Image
          style={{ height: "60px", width: "80px" }}
          src={logo}
          alt="Logo"
          width={100}
        ></Image>
      </Link>
      <div>
        <Dropdown menu={{ items }}>
          <a className="hover:text-red-600" style={{ color: "black", marginRight: "10px", fontWeight: "bold" }}>
            <Space wrap size={16}>
              {/* <Avatar size="large" icon={<UserOutlined />} /> */}
              Categories
            </Space>
          </a>
        </Dropdown>
        <Link
        className="hover:text-red-600"
          style={{ color: "black", marginRight: "10px", fontWeight: "bold" }}
          href={"/service"}
        >
          Services
        </Link>
        <Link
        className="hover:text-red-600"
          style={{ color: "black", marginRight: "10px", fontWeight: "bold" }}
          href={"/about"}
        >
          About
        </Link>
        <Link
        className="hover:text-red-600"
          style={{ color: "black", marginRight: "10px", fontWeight: "bold" }}
          href={"/about"}
        >
          Contact
        </Link>
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
    </div>
  );
};

export default Navbar;
