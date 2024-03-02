"use client";
import { useFormik } from "formik";
import AuthInput from "../Input/AuthInput";
import * as Yup from "yup";
import { CreateCompanyApi } from "@/lib/Https";
import AuthBtn from "../Buttons/AuthBtn";
import { useState } from "react";
import AddingLightLoader from "../Loader/AddingLightLoader";
import { Box, Modal, Typography } from "@mui/material";

export const EditCompany = ({ Open, setOpen, State }) => {
  const [Loading, setLoading] = useState(false);
  console.log(State[0]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    desc: Yup.string().required("Description is required"),
    contact: Yup.string().required("Contact is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    cnic: Yup.string().required("CNIC is required"),
    address: Yup.string().required("Address is required"),
  });

  console.log(State);

  const formik = useFormik({
    initialValues: {
      name: State?.name,
      desc: State?.desc,
      contact: State?.contact,
      email: State?.email,
      cnic: State?.cnic,
      address: State?.address,
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
          alert(response?.data?.error);
          // ErrorToast(response?.data?.error);
        } else if (response?.data?.success) {
          // SuccessToast("Successfully Company Added!");
          alert("Successfully Company Added!");
          setOpen(false);
        }
      } catch (err) {
        console.error("error1", err);
      }
      setLoading(false);
    },
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 380,
    bgcolor: "background.paper",
    border: "3px solid #5A4AE3",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={Open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="flex-col justify-center items-center">
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "bold" }}
          className="flex justify-center items-center border-b-2 border-[#5A4AE3] pb-4 text-[#5A4AE3] "
        >
          {/* <Icon className="mr-[5px]" style={{ fontSize: "40px" }} /> */}
          Edit Company
        </Typography>

        <Typography
          component={"div"}
          id="modal-modal-description"
          sx={{ mt: 3 }}
        >
          {/* Form Portion */}
          {/* Body of modal */}
          <div className="flex-col justify-center items-center">
            <form className="flex flex-col gap-y-4 items-center justify-center w-[100%]">
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
                  title="Update Company"
                  Loading={Loading}
                />
              )}
            </form>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};
