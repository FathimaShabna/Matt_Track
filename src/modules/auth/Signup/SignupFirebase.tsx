"use client";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useAuthMethod } from "@crema/hooks/AuthHooks";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppInfoView from "@crema/components/AppInfoView";
import { Fonts } from "@crema/constants/AppEnums";
import Link from "next/link";

import { useIntl } from "react-intl";
import axios from "@crema/services/axios";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignupFirebase = () => {
  const { registerUserWithEmailAndPassword, logInWithPopup } = useAuthMethod();
  const { messages } = useIntl();
  const [openEye, setOpenEye] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required(String(messages["validation.nameRequired"])),
    email: yup
      .string()
      .email(String(messages["validation.emailFormat"]))
      .required(String(messages["validation.emailRequired"])),
    password: yup
      .string()
      .required(String(messages["validation.passwordRequired"])),
  });
  const handleClick = () => {
    setOpenEye(!openEye);
  };
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", mb: 5 }}>
        <Formik
          validateOnChange={true}
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (data, { setSubmitting }) => {
            // (userData: userDataType) => async () => {
            setSubmitting(true);

            registerUserWithEmailAndPassword(data);
            console.log(data)

            setSubmitting(false);

            try {
              const response = await axios.post("/signup", {
                data: {
                  firstName: data.name,
                  email: data.email,
                  password: data.password,
                },
              });
              if (response.status === 200) {
                return response.data;
              } else {
                throw new Error("User is not Created");
              }
            } catch (error: any) {
              throw error;
            }
          }}
         
        >
          {({ isSubmitting }) => (
            <Form style={{ textAlign: "left" }} noValidate autoComplete="off">
              <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                <AppTextField
                  label={<IntlMessages id="common.name" />}
                  name="name"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                <AppTextField
                  label={<IntlMessages id="common.email" />}
                  name="email"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: { xs: 4, xl: 5 }, position: "relative" }}>
                <AppTextField
                  label={<IntlMessages id="common.password" />}
                  name="password"
                  type={openEye ? "text" : "password"}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
                <span className="absolute top-5 right-5" onClick={handleClick}>
                  {openEye ? (
                    <IoEyeOffOutline className=" text-[20px]" />
                  ) : (
                    <IoEyeOutline className=" text-[20px]" />
                  )}
                </span>
              </Box>

              <div>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    minWidth: 160,
                    fontWeight: Fonts.REGULAR,
                    fontSize: 16,
                    textTransform: "capitalize",
                    padding: "4px 16px 8px",
                  }}
                  type="submit"
                >
                  <IntlMessages id="common.signup" />
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>

      <Box
        sx={{
          color: "grey.500",
          mb: { xs: 5, md: 7 },
        }}
      >
        <span style={{ marginRight: 4 }}>
          <IntlMessages id="common.alreadyHaveAccount" />
        </span>
        <Box
          component="span"
          sx={{
            fontWeight: Fonts.MEDIUM,
            "& a": {
              color: (theme) => theme.palette.primary.main,
              textDecoration: "none",
            },
          }}
        >
          <Link href="/signin">
            <IntlMessages id="common.signIn" />
          </Link>
        </Box>
      </Box>

      <AppInfoView />
    </Box>
  );
};

export default SignupFirebase;
