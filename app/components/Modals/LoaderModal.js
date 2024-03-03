"use client";
import { useFormik } from "formik";
import AuthInput from "../Input/AuthInput";
import * as Yup from "yup";
import { CreateCompanyApi } from "@/lib/Https";
import AuthBtn from "../Buttons/AuthBtn";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import AddingLightLoader from "../Loader/AddingLightLoader";
import PageLoader from "../Loader/PageLoader";

export const LoaderModal = ({ Open, setOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 380,
    bgcolor: "rgba(0, 0, 0, 0)", // Set background to transparent
    borderRadius: "10px",
    p: 4,
    outline: "none", // Set outline to none
  };

  return (
    <Modal
      open={Open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="flex-col justify-center items-center">
        <PageLoader />
      </Box>
    </Modal>
  );
};
