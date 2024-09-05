"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "@crema/services/axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAuthMethod } from "@crema/hooks/AuthHooks";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  role: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

function RegistrationForm() {
  const { registerUserWithEmailAndPassword, logInWithPopup } = useAuthMethod();

  const [state, setState] = useState(false);

  const [oldemail,SetOldEmail]=React.useState('');

  const[reAuthpass,SetReAuthPass]=React.useState('');
 

  const [showDialoge,SetDialoge]=React.useState(false);

  

  // const notify = () => toast("dcbhbdwdh");
  const handleToggle = () => {
    setState(!state);
  };

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
      <div className="">
        <div className="w-full h-[100%] bg-[#EEEDEB] p-6 rounded-lg shadow-md">
          <Formik
            initialValues={{
              firstName: "",
              email: "",
              phoneNumber: "",
              role: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
              const data = {
                name: values.firstName,
                email: values.email,
                password: values.password,
              };
              registerUserWithEmailAndPassword(data);
              try {
                const response = await axios.post("/signup", {
                  data: {
                    firstName: values.firstName,
                    email: values.email,
                    password: values.password,
                    role: values.role,
                    phoneNumber: values.phoneNumber,
                  },
                });

                if (response.status === 200) {
                  resetForm();
                  setSubmitting(false);
                  // toast.success('"Your Form have been submitted successfull"', {
                  //   position: "top-right",
                  //   autoClose: 5000,
                  //   hideProgressBar: false,
                  //   closeOnClick: true,
                  //   pauseOnHover: true,
                  //   draggable: true,
                  //   progress: undefined,
                  //   theme: "light",
                  // });
                } else {
                  throw new Error("User is not Created");
                }
              } catch (error) {
                // toast.error('Please make sure "All input forms are filed"', {
                //   position: "top-right",
                //   autoClose: 5000,
                //   hideProgressBar: false,
                //   closeOnClick: true,
                //   pauseOnHover: true,
                //   draggable: true,
                //   progress: undefined,
                //   theme: "dark",
                // });
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="text-2xl font-medium relative mb-4">
                  Registration
                  <div className="absolute left-0 bottom-0 h-1 w-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4 flex flex-wrap">
                    <div className="w-[50%] !m-0">
                      <label className="block font-medium mb-1">
                        Full Name
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        className="w-[80%] h-11 px-3 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="w-[50%] !m-0">
                      <label className="block font-medium mb-1">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="w-[90%] h-11 px-3 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="w-[50%]">
                      <label className="block font-medium mb-1">
                        Phone Number
                      </label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        className="w-[80%] h-11 px-3 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your phone number"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="w-[50%]">
                      <label className="block font-medium mb-1">Position</label>
                      <Field
                        as="select"
                        name="role"
                        className="w-[90%] h-11 px-3 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="" label="Select role" />
                        {/* <option value="admin" label="Admin" /> */}
                        <option value="TEAMLEAD" label="Team Leader" />
                        <option value="MANAGER" label="Manager" />
                        <option value="EMPLOYEE" label="Employee" />
                      </Field>
                      <ErrorMessage
                        name="role"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="w-[50%] relative  ">
                      <label className="block font-medium mb-1">Password</label>
                      <Field
                        type={state ? "text" : "password"}
                        name="password"
                        className="w-[80%] h-11 px-3 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-blue-400 "
                        placeholder="Enter your password"
                      />
                      <span
                        className="flex justify-center flex-row absolute top-10 right-28 icon={icon} "
                        onClick={handleToggle}
                      >
                        {state ? <FaRegEyeSlash /> : <FaEye />}
                      </span>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="w-[50%]">
                      <label className="block font-medium mb-1">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        className="w-[90%] h-11 px-3 rounded-md border outline-none border-gray-300 focus:ring-2 focus:ring-blue-400"
                        placeholder="Confirm your password"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <div className="mt-16 flex justify-center">
                    <button
                      type="submit"
                      className="w-[60%] h-11 rounded-md text-white font-medium bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-gradient-to-l"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
