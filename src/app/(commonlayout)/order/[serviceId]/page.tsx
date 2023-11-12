"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, message } from "antd";
import { registerSchema } from "@/schemas/register";
import FormTextArea from "@/components/Forms/FormTextArea";
import { getUserInfo } from "@/services/auth.service";
import { Districts } from "@/constants/global";
import FormSelectField from "@/components/Forms/FormSelectField";
import NBButton from "@/components/ui/NBButton";
import { orderSchema } from "@/schemas/order";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import UMModal from "@/components/ui/UMModal";
import { useState } from "react";
import Link from "next/link";

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
  const { userId } = getUserInfo() as any;
  const [createOrder] = useCreateOrderMutation();
  const [open, setOpen] = useState<boolean>(false);

  const districtsOptions = Districts?.map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading("Processing")
    try {
      const payload = {
        ...data,
        userId,
        serviceId,
      };
      const res:any = await createOrder(payload);
      console.log(res);
      if (res?.data?.data?.id) {
        message.success("Order created Successfully!")
        setOpen(true);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="mt-10">
      <Card className="m-auto" style={{ width: 600 }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(orderSchema)}>
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
            <FormSelectField
              size="large"
              name="district"
              options={districtsOptions}
              label="District"
              placeholder="Select"
            />
          </div>
          <NBButton>Create Order</NBButton>
          {/* <Button type="primary" htmlType="submit">
            Register
          </Button> */}
        </Form>
      </Card>

      <UMModal
        title="Order Created Successfully!"
        isOpen={open}
        closeModal={() => setOpen(false)}
        showCancelButton={false}
        showOkButton={false}
      >
        <div>
          <p className="my-5">Your Order has been created Successfully!</p>
          <div className="flex justify-end gap-5">
            <NBButton><Link className="text-white font-bold" href={'/'}>Go to Home</Link></NBButton>
            <NBButton><Link className="text-white font-bold" href={'/'}>Show All Orders</Link></NBButton>
          </div>
        </div>
      </UMModal>
    </div>
  );
};

export default OrderPage;
