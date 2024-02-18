import { useFormik } from "formik";
import AuthInput from "../Input/AuthInput";
import ModalWrapper from "./ModalWrapper";
import * as Yup from "yup";
import { CreateCompanyApi } from "@/lib/Https";
import AuthBtn from "../Buttons/AuthBtn";
import { useState } from "react";
import AddingLightLoader from "../Loader/AddingLightLoader";

export const AddCompanyModal = ({ Open, setOpen, title }) => {
  const [Loading, setLoading] = useState(second);

  const validationSchema = Yup.object.shape({
    name: Yup.string().required("Password is required"),
    desc: Yup.string().required("Password is required"),
    contact: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    cnic: Yup.string().required("Password is required"),
    address: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      contact: "",
      email: "",
      cnic: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await CreateCompanyApi({
          name: values.name,
          desc: values.desc,
          contact: values.contact,
          email: values.email,
          cnic: values.cnic,
          address: values.address,
        });
        if (!response?.data?.success) {
          ErrorToast(response?.data?.error);
        } else if (response?.data?.success) {
          SuccessToast("Successfully Company Added!");
          setOpen(false);
        }
      } catch (err) {
        console.error("error1", err);
      }
      setLoading(false);
    },
  });
  return (
    <ModalWrapper title={title} Open={Open} setOpen={setOpen}>
      <AuthInput
        name="name"
        label="Name"
        placeholder="Enter name..."
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        touched={formik.touched.name}
        isError={formik.errors.name}
        errorMsg={formik.errors.name}
      />
      <AuthInput
        name="desc"
        label="Description"
        placeholder="Enter description..."
        type="text"
        value={formik.values.desc}
        onChange={formik.handleChange}
        touched={formik.touched.desc}
        isError={formik.errors.desc}
        errorMsg={formik.errors.desc}
      />
      <AuthInput
        name="contact"
        label="Contact"
        placeholder="Enter Contact..."
        type="number"
        value={formik.values.contact}
        onChange={formik.handleChange}
        touched={formik.touched.contact}
        isError={formik.errors.contact}
        errorMsg={formik.errors.contact}
      />
      <AuthInput
        name="email"
        label="Email"
        placeholder="Enter Email..."
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        touched={formik.touched.email}
        isError={formik.errors.email}
        errorMsg={formik.errors.email}
      />
      <AuthInput
        name="cnic"
        label="CNIC"
        placeholder="Enter CNIC..."
        type="text"
        value={formik.values.cnic}
        onChange={formik.handleChange}
        touched={formik.touched.cnic}
        isError={formik.errors.cnic}
        errorMsg={formik.errors.cnic}
      />
      <AuthInput
        name="address"
        label="Address"
        placeholder="Enter Address..."
        type="text"
        value={formik.values.address}
        onChange={formik.handleChange}
        touched={formik.touched.address}
        isError={formik.errors.address}
        errorMsg={formik.errors.address}
      />
      {Loading ? (
        <AddingLightLoader />
      ) : (
        <AuthBtn
          type="submit"
          disabled={Loading}
          onSubmit={formik.handleSubmit}
          title="Add Company"
          Loading={Loading}
        />
      )}
    </ModalWrapper>
  );
};
