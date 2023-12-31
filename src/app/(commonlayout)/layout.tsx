"use client"
import Navbar from "@/components/ui/Navbar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Header, Footer, Content } = Layout;
import NBFooter from "@/components/ui/NBFooter";

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
    width: "100%",
    lineHeight: "64px",
    backgroundColor: "#fff",
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
        <Footer ><NBFooter/></Footer>
      </Layout>
    </div>
  );
};

export default CommonLayout

