"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card } from "antd";
import { registerSchema } from "@/schemas/register";
import FormTextArea from "@/components/Forms/FormTextArea";

type IDProps = {
  params: any;
};

type FormValues = {
  name: string;
  email: string;
  contactNo: string;
  address: string;
  district: string;
  password: string;
};
const OrderPage = ({ params }: IDProps) => {
  const { serviceId } = params;

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div className="mt-10">
      <Card className="m-auto" style={{ width: 600 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)}>
          <div>
            <FormInput
              name="name"
              type="text"
              size="large"
              label="Name"
              required
            />
          </div>
          <div>
            <FormInput
              name="email"
              type="email"
              size="large"
              label="Email"
              required
            />
          </div>
          <div>
            <FormInput
              name="contactNo"
              type="text"
              size="large"
              label="Contact No"
              required
            />
          </div>
          <div>
            <FormTextArea
              placeholder="Address"
              name="address"
              label="Address"
              rows={3}
            />
          </div>

          <div
            style={{
              margin: "15px 0px",
            }}
          >
            <FormInput
              name="password"
              type="password"
              size="large"
              label="User Password"
              required
            />
          </div>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default OrderPage;
