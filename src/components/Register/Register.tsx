"use client";
import { Button, Col, Input, Row, message } from "antd";
import registerImage from "../../assets/Sign up-rafiki.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserRegisterMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextArea from "../Forms/FormTextArea";
import DistrictField from "../Forms/DistrictField";
import { registerSchema } from "@/schemas/register";

type FormValues = {
  name: string;
  email:  string;
  contactNo: string;
  address: string;
  district: string;
  password: string;
};

const Register = () => {
  const [userRegister] = useUserRegisterMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log(data);
      const res = await userRegister({ ...data }).unwrap();
      console.log(res);
      message.success("User registered successfully!");
      router.push('/login')
      //   if (res?.accessToken) {
      //     router.push("/profile");
      //     message.success("User logged in successfully!");
      //   }
      //   storeUserInfo({ accessToken: res?.accessToken });
      //   // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={registerImage} width={500} alt="register image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Register
        </h1>
        <div>
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
            <div>
              <DistrictField />
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
        </div>
      </Col>
    </Row>
  );
};

export default Register;
