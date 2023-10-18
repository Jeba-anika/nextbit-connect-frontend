import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { Card } from "antd";

const CategorySection = () => {
  const { data } = useCategoriesQuery({});
  return (
    <div style={{
        backgroundColor: "#B9314F"
    }} className="flex justify-around gap-60 p-10">
      <div className="mr-10 ml-24 my-auto">
        <p>Your one stop smart internet solution !</p>
        <h2>What We Do ?</h2>
        <h3>Super Fast & Reliable Faster Network</h3>
        <p className="text-justify">
          Amber IT provides an extensive range of high quality data & internet
          connectivity services throughout the country. We offer safe internet
          access services with various service level descriptions for corporate
          businesses and SMEs. Our IPTSP services allow the opportunity to
          generate profitable and recurring monthly revenue for businesses. We
          also offer hosting & web development solutions for any business with
          high availability and consistency. Corporate Internet & Data
          Connectivity Safe & Smarter Home Internet High Quality & Reliable
          IPTSP Service Secured Hosting & Web Development
        </p>
      </div>
      <div className="flex">
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  );
};

export default CategorySection;
