"use client";
import { useAppDispatch } from "@crema/hooks/ReduxHooks";
import axios from "@crema/services/axios";
import React, { useEffect, useState } from "react";
import { object, string, number } from "yup";
import { onGetProjectsDetails } from "../../toolkit/actions/ProjectActions";

const Page = () => {
  const dispatch = useAppDispatch();
  const initialState = {
    name: "",
    releaseDate: "",
    duration: "",
    resource: "",
    projectType: "",
    approvalStatus: "",
    projectStatus: "",
    noofsprint: "",
  };

  useEffect(() => {
    const data = async () => {
      const project = await dispatch(onGetProjectsDetails());
      console.log(project);
    };
    data();
  }, []);

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateSchema = object({
    name: string().required("Project Title is required"),
    releaseDate: string().required("Code is required"),
    duration: string().required("Duration is required"),
    resource: string().required("Resource is required"),
    projectType: string().required("Project type is required"),
    approvalStatus: string().required("Approval status is required"),
    projectStatus: string().required("Project status is required"),
    noofsprint: string().required("Number of Sprints is required"),
  });

  const Project = async () => {
    try {
      const response = await axios.post("/projectcreate", {
        name: state.name,
        releaseDate: state.releaseDate,
        duration: state.duration,
        resource: state.resource,
        projectType: state.projectType,
        approvalStatus: state.approvalStatus,
        projectStatus: state.projectStatus,
        noofsprint: state.noofsprint,
      });
      console.log("Project created successfully:", response);
      setState(initialState);
    } catch (error) {
      console.error("Error during project creation:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validateSchema.validate(state, { abortEarly: false });
      // If validation passes, make the API call
      await Project();
      setErrors({});
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Validation error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 max-h-full flex justify-center items-center"
      >
        <div className="bg-white w-[800px] h-[900px] flex flex-col shadow-xl rounded-lg">
          <h1 className="text-center text-2xl text-gray-500 font-bold p-3">
            Create New Project
          </h1>

          <div className="flex mt-10 items-center justify-center  ">
            <label
              className="w-[120px] font-medium text-base text-left"
              htmlFor="name"
            >
              Project Title
            </label>
            <input
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-4 shadow-lg rounded-md"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.name}
            </div>
          )}

          <div className="flex mt-10 items-center justify-center">
            <label className="w-[120px] font-medium text-base" htmlFor="code">
              Release Date
            </label>
            <input
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-4 shadow-lg rounded-md"
              type="Date"
              name="releaseDate"
              value={state.releaseDate}
              onChange={handleChange}
            />
          </div>

          {errors.releaseDate && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.releaseDate}
            </div>
          )}

          <div className="flex mt-10 items-center justify-center">
            <label
              className="w-[120px] font-medium text-base"
              htmlFor="resource"
            >
              Resource
            </label>
            <input
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-4 shadow-lg rounded-md"
              type="text"
              name="resource"
              value={state.resource}
              onChange={handleChange}
            />
          </div>

          {errors.resource && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.resource}
            </div>
          )}

          <div className="flex mt-10 items-center justify-center">
            <label
              className="w-[120px] font-medium text-base"
              htmlFor="duration"
            >
              Duration
            </label>
            <input
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-4 shadow-lg rounded-md"
              type="text"
              name="duration"
              value={state.duration}
              onChange={handleChange}
            />
          </div>

          {errors.duration && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.duration}
            </div>
          )}

          <div className="flex mt-10 items-center justify-center">
            <label
              className="w-[120px] font-medium text-base"
              htmlFor="noofsprint"
            >
              No. of Sprints
            </label>
            <input
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-4 shadow-lg rounded-md"
              type="number"
              name="noofsprint"
              value={state.noofsprint}
              onChange={handleChange}
            />
          </div>

          {errors.noofsprint && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.noofsprint}
            </div>
          )}

          <div className="flex mt-10 items-center justify-center">
            <label
              className="w-[120px] font-medium text-base"
              htmlFor="projectType"
            >
              Project Type
            </label>
            <select
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-1 shadow-lg rounded-md"
              id="projectType"
              name="projectType"
              value={state.projectType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="CLIENT">Client</option>
              <option value="INTERNAL">Internal</option>
            </select>
          </div>

          {errors.projectType && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.projectType}
            </div>
          )}

          <div className="flex mt-10 items-center justify-center">
            <label
              className="w-[120px] font-medium text-base"
              htmlFor="approvalStatus"
            >
              Approval Status
            </label>
            <select
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-1 shadow-lg rounded-md"
              name="approvalStatus"
              value={state.approvalStatus}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="APPROVED">Approved</option>
              <option value="DECLINED">Declined</option>
            </select>
          </div>

          {errors.approvalStatus && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.approvalStatus}
            </div>
          )}

          <div className="flex mt-10 items-center justify-center">
            <label
              className="w-[120px] font-medium text-base"
              htmlFor="projectStatus"
            >
              Project Status
            </label>
            <select
              className="outline-none border-2 border-gray-200 h-[35px] w-80 p-1 shadow-lg rounded-md"
              name="projectStatus"
              value={state.projectStatus}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="STARTED">Started</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>

          {errors.projectStatus && (
            <div className="error text-red-600 flex justify-center mt-2">
              {errors.projectStatus}
            </div>
          )}

          <div className="flex justify-center">
            <button
              className="w-[400px] bg-blue-400 mt-8 shadow-2xl font-serif h-10 border-2 border-white rounded-full font-light text-2xl text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
