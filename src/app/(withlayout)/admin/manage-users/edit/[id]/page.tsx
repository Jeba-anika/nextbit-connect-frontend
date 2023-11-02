"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  Districts,
  bloodGroupOptions,
  genderOptions,
} from "@/constants/global";
import { useAdminQuery, useUpdateAdminMutation } from "@/redux/api/adminApi";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import {
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { useUserQuery } from "@/redux/api/userApi";

import { Button, Col, Row, message } from "antd";

const EditServicePage = ({ params }: any) => {
  const { data: userData, isLoading: loading } = useUserQuery(params?.id);
  console.log(userData);
  const user = userData?.data;
  const [updateUser] = useUpdateUserMutation();

  const rolesOptions = ["user", "admin", "super_admin"]?.map((role) => {
    return {
      label: role,
      value: role,
    };
  });

  const districtsOptions = Districts?.map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  const onSubmit = async (values: any) => {
    message.loading("Updating.....");
    try {
      const res = await updateUser({
        id: params?.id,
        body: values,
      }).unwrap();
      console.log(res);
      if (res?.data?.id) {
        message.success("User Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
    contactNo: user?.contactNo || "",
    address: user?.address || "",
    district: user?.district || "",
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
            label: "users",
            link: "/admin/manage-users",
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
                span={6}
                style={{
                  marginBottom: "10px",
                }}
              >
                <div style={{ margin: "10px 0px" }}>
                <FormInput 
                    type="text"
                    name="name" 
                    size="large"
                    label="Name" />
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={6}
                style={{
                  marginBottom: "10px",
                }}
              >
                <div style={{ margin: "10px 0px" }}>
                  <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    size="large"
                  />
                </div>
              </Col>

              <Col
                className="gutter-row"
                span={6}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              

              <Col
                className="gutter-row"
                span={6}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="role"
                  options={rolesOptions}
                  label="Role"
                  placeholder="Select"
                />
              </Col>
              
              <Col
                className="gutter-row"
                span={6}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="district"
                  options={districtsOptions}
                  label="District"
                  placeholder="Select"
                />
              </Col>
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormTextArea name="address" label="Address" rows={4} />
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
