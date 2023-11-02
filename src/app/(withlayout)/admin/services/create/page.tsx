"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Districts } from "@/constants/global";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useAddRoomMutation } from "@/redux/api/roomApi";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { ICategory } from "@/types";
import { Button, Col, Row, message } from "antd";

const CreateServicePage = () => {
  const [addService] = useAddServiceMutation();
  const { data, isLoading } = useCategoriesQuery({
    limit: 100,
    page: 1,
  });
  const categories: ICategory[] = data?.data;
  const categoriesOptions = categories?.map((category) => {
    return {
      label: category?.title,
      value: category?.id,
    };
  });
  
  const locationOptions = Districts?.map((district) => {
    return {
      label: district,
      value: district,
    };
  });

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      // console.log(data);
      data.price = parseInt(data.price)
      const res = await addService({...data}).unwrap();
      console.log(res)
      if (res?.data?.id) {
        message.success("Service created successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "services", link: `/${base}/services` },
        ]}
      />
      <h1>Create Service</h1>
      <Form submitHandler={onSubmit}>
      <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div >
              <FormInput name="title" label="Title" />
            </div>
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
                <div >
                    <FormInput name="speed" label="Speed" />
                </div>
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
                <div >
                    <FormInput name="time" label="Service Time" />
                </div>
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
                <div >
                    <FormInput name="talkTime" label="Talk Time" />
                </div>
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
          <div >
              <FormSelectField
                size="large"
                name="location"
                options={locationOptions as SelectOptions[]}
                label="Location"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
          <div >
              <FormSelectField
                size="large"
                name="categoryId"
                options={categoriesOptions as SelectOptions[]}
                label="Category"
                placeholder="Select"
              />
            </div>
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div >
              <FormInput name="price" label="Price" />
            </div>
          </Col>
          {/* <Col span={8} style={{ margin: "10px 0" }}>
          <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="availability"
                options={availabilityOptions as SelectOptions[]}
                label="Availability"
                placeholder="Select"
              />
            </div>
          </Col> */}
          <Col span={16} style={{ margin: "10px 0" }}>
            <div >
              <FormTextArea name="description" label="Description" />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateServicePage;
