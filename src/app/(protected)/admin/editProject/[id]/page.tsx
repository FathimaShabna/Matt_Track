// "use client"
// import EditProject from '@crema/components/Admin/EditProject';
// import axios from '@crema/services/axios';
// import { useParams } from 'next/navigation';

// import React, { useEffect, useState } from 'react'
// const EditPage = () => {
//   const params=useParams()
//   console.log(params)

//   const [data,setData]=useState()
//   useEffect(() => {
//     const getproject = async () => {
//       try {
//         const response = await axios.get("/get-project");

//         const filter=response.data.filter((project:any)=>{
//           return  project.id===Number(params.id)
//         })
//         //  console.log(response.data)
//         console.log(filter);

//         setData(filter)
//       } catch (error) {
//         console.log("Data cannot fetches", error);
//       }
//     };

//     getproject();
//   }, []);

//   // console.log(data)
//   return (
//     <>
//     <EditProject projectData={data} />
//     </>
//   )
// }

// export default EditPage;

"use client";
import EditProject from "@crema/components/Admin/EditProject";
import axios from "@crema/services/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditPage = () => {
  const params = useParams();
  console.log(params);

  

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await axios.get("/get-project");

        const filter = response.data.filter((project: any) => {
          return project.id === Number(params.id);
        });

        console.log(filter);

        setData([...filter]);
      } catch (error) {
        console.log("Data cannot be fetched", error);
      }
    };

    getProject();
  }, [params.id]);

  console.log(params.id)
  console.log("selected project", data);
  return (
    <>
      {data.length > 0 ? (
        <EditProject projectData={data[0]}  />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default EditPage;
