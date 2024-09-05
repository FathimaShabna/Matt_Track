"use client";
import React, { useEffect, useState } from "react";
import { FaFile } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";

import axios from "@crema/services/axios";
import { getId, Projectdatatype } from "@crema/types/models/AuthUser";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Modelpopup from "@crema/components/Admin/Modelpopup";
import Link from "next/link";

const projects = () => {
  const [projectData, setProjectData] = useState<Projectdatatype[]>([]);

  const [getid, setGetid] = useState({});

  useEffect(() => {
    const getproject = async () => {
      try {
        const response = await axios.get("/get-project");
        setProjectData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Data cannot fetches", error);
      }
    };

    getproject();
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = (id: any) => {
    setOpen(!open);

    //  console.log(id)

    const filter = projectData.filter((item) => item.id === id);
    console.log(filter);

    setGetid(filter);
  };

  return (
   
    <div>
      {projectData.map((project) => (
        <Card
          sx={{
            maxWidth: 1005,
            minHeight: 130,
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          
          transition: 'box-shadow 0.3s ease',
           '&:hover': {
            boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.2), -5px -5px 15px 0px rgba(0,0,0,0.2)',
          },
          }}
        >
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10px",
              marginRight: "20px",
              paddingTop: "10px",
            
            }}
          >
            <Typography component="div" sx={{ display: "flex", minWidth:"100px" }}>
              <FaFile
                style={{ color: "rgb(48, 227, 202)", fontSize: "20px", }}
              />
              <Typography sx={{ display: "flex", rowGap: "20px" }}>
                <h1 className="font-medium font-serif text-lg text-gray-600">
                  {project.name}
                </h1>
               
              </Typography>
            </Typography>

            <Typography component="div" sx={{minWidth:"100px"}}>
              <p className="font-serif">Project Status</p>
              <p className="mt-1">{project.approvalStatus}</p>
            </Typography>

            <Typography component="div" sx={{minWidth:"100px"}}>
              <p className="font-serif ">Resource</p>

              <div className="flex">
                <IoIosPerson
                  style={{ fontSize: "20px", color: "rgb(48, 227, 202)" }}
                />
                <p>{project.resource}</p>
              </div>
            </Typography>

            <Typography component="div" sx={{minWidth:"100px"}}>

             <Link href={`/admin/editProject/${project.id}`}><button className="w-[120px] border-teal-400 border-2 rounded-2xl">
                View Project
              </button></Link> 
            </Typography>
          </Typography>

          <Typography
            component="div"
            sx={{
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10px",
              marginRight: "20px",
            }}
          >
            <div className="min-w-[100px]">
              <p className="font-serif">No.of.Sprint</p>
              <div className="flex  items-center">
                <p>{project.noofsprint}</p>
                <p className="ml-2">
                  <FaPersonRunning style={{ color: "rgb(48, 227, 202)" }} />
                </p>
              </div>
            </div>

            <div className="min-w-[100px]">
              <p className="font-serif">Project Duration</p>
              <p>{project.duration}</p>
            </div>

            <div className="min-w-[100px]">
              <p className="font-serif">Project ReleaseDate</p>
              {/* <p>{project.releaseDate}</p> */}
              <p>{new Date(project.releaseDate).toLocaleDateString()}</p>
            </div>

            <div className="min-w-[100px]">
              <p className="font-serif">Project Type</p>
              <p>{project.projectType}</p>
              
            </div>
          </Typography>
        </Card>
      ))}

    
    </div>
  );
};

export default projects;
