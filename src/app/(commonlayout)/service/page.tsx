"use client";
import NBServiceCard from "@/components/ui/NBServiceCard";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Button, Card, Col, Row, Space, Spin } from "antd";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const { data, isLoading } = useServicesQuery({});
  console.log(data);
  if (isLoading) {
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
  return (
    <div className="mx-48 my-20">
      
      <Row gutter={[40,40]}>
        {data?.services?.data?.data?.map((service: any) => (
          <Col key={service?.id} xs={24} sm={12} md={12} lg={8}>
            <div className="shadow">
                <NBServiceCard service={service}/>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesPage;
