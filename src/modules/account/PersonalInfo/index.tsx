import React, { useContext, useState } from "react";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import { Formik } from "formik";
import * as yup from "yup";
import PersonalInfoForm from "./PersonalInfoForm";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import axios from "@crema/services/axios";
import { UserContext } from "@crema/context/AppContextProvider/UserInfoContextProvider";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Required"),
});

const PersonalInfo = () => {
  const { user } = useAuthUser();
  const userData = useContext(UserContext);

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 550,
      }}
    >
      <Formik
        validateOnBlur={true}
        initialValues={{
          ...user,
          photoURL: user.photoURL
            ? user.photoURL
            : "/assets/images/placeholder.jpg",
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          //TODO Api Call here to save user info
          setSubmitting(false);

          try {
            const response = await axios.patch(`/UpDateUser/${userData.id}`, {
              userData: {
                firstName: data.displayName,
                // phoneNumber:data.phoneNumber,
                imageUrl: data.photoURL,
                // linkedinAdress:data.linkedinAdress,
                // resume:data.resume,
                // experience:data.experience
              },
            });
            if (response.status === 200) {
              return response.data;
            } else {
              throw new Error("User is not created");
            }
          } catch (err: any) {
            throw err;
          }
        }}
      >
        {({ values, setFieldValue }) => {
          setData(values);
          return (
            <PersonalInfoForm values={values} setFieldValue={setFieldValue} />
          );
        }}
      </Formik>
    </Box>
  );
};

export default PersonalInfo;

PersonalInfo.propTypes = {
  setFieldValue: PropTypes.func,
  values: PropTypes.string,
};
