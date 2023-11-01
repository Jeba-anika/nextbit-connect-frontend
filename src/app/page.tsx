"use client";
import CategorySection from "@/components/ui/CategorySection";
import InfoSection from "@/components/ui/InfoSection";
import Navbar from "@/components/ui/Navbar";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Layout } from "antd";
import { redirect } from "next/navigation";
const { Header, Footer, Content } = Layout;

const HomePage = () => {
  // return redirect("/profile");
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    position: "fixed",
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
          <InfoSection/>
          {/* <CategorySection/> */}
        
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
};

export default HomePage;
