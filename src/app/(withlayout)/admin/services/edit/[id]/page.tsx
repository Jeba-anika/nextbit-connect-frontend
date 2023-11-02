"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Districts, bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAdminQuery, useUpdateAdminMutation } from "@/redux/api/adminApi";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import {
  useServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { IDepartment } from "@/types";

import { Button, Col, Row, message } from "antd";

const EditServicePage = ({ params }: any) => {
  const { data: serviceData, isLoading: loading } = useServiceQuery(params?.id);
  console.log(serviceData);
  const service = serviceData?.data;
  const [updateService] = useUpdateServiceMutation();

  const { data, isLoading } = useCategoriesQuery({ limit: 100, page: 1 });
  //@ts-ignore
  const categories : ICategory[] = data?.data;

  const categoryOptions =
    categories &&
    categories?.map((category) => {
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

      const availabilityOptions = [true, false]?.map((option) => {
        return {
          label: `${option}`,
          value: `${option}`,
        };
      });




  const onSubmit = async (values: any) => {
    message.loading("Updating.....");
    try {
      const res = await updateService({
        id: params?.id,
        body: values,
      }).unwrap();
      console.log(res)
      if (res?.data?.id) {
        message.success("Service Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    title: service?.title || "",
    speed: service?.speed || "",
    price: service?.price || "",
    time: service?.time || "",
    talkTime: service?.talkTime || "",
    location: service?.location || "",
    description: service?.description || "",
    availability: service?.availability || "",
    categoryId: service?.categoryId || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "services",
            link: "/admin/services",
          },
        ]}
      />
      <h1>Edit Service</h1>

      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="title"
                  size="large"
                  label="Title"
                />
              </Col>
              <Col className="gutter-row" span={8} style={{
                  marginBottom: "10px",
                }}>
                <div style={{ margin: "10px 0px" }}>
                  <FormInput name="speed" label="Speed"  size="large"/>
                </div>
              </Col>
              
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="time"
                  size="large"
                  label="Service Time"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="talkTime"
                  size="large"
                  label="Talk Time"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="location"
                  options={locationOptions}
                  label="Location"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="categoryId"
                  options={categoryOptions}
                  label="Category"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="price"
                  size="large"
                  label="Price"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="availability"
                  options={availabilityOptions}
                  label="Availability"
                  placeholder="Select"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="description"
                  label="Description"
                  rows={4}
                />
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditServicePage;
