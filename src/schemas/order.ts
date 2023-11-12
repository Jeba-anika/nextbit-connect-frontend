import * as yup from "yup";

export const orderSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  contactNo: yup.string().required("Contact No is required"),
  address: yup.string().required("Address is required"),
  district: yup.string().required("District is required"),
});