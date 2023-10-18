"use client";
import Contents from "@/components/ui/Contents";
import Navbar from "@/components/ui/Navbar";
import SideBar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Header, Footer, Content } = Layout;

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    // paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#DEC3BE",
  };
  const contentStyle: React.CSSProperties = {
    // textAlign: "center",
    minHeight: 120,
    // lineHeight: "120px",
    color: "#fff",
    // backgroundColor: "#108ee9",
  };
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };

  return (
    <div>
      
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header style={headerStyle}><Navbar/></Header>
        <Content style={contentStyle}>
          {children}
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
};

export default CommonLayout;
