import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "@crema/services/axios";
import { RotatingLines } from "react-loader-spinner";

interface ProjectData {
  id: number;
  name: string;
  resource: string;
  projectType: string;
  approvalStatus: string;
  projectStatus: string;
  duration: string;
  noofsprint: string;
  releaseDate: Date | string | null;
}

interface EditProjectProps {
  projectData: ProjectData | null;
}

const EditProject: React.FC<EditProjectProps> = ({ projectData }) => {
  const initialState: ProjectData = {
    id: 0,
    name: "",
    resource: "",
    projectType: "",
    approvalStatus: "",
    projectStatus: "",
    duration: "",
    noofsprint: "",
    releaseDate: null,
  };

  const [updateProject, setUpdateProject] = useState<ProjectData>(initialState);

  const [loading, setLoading]=useState(false)

  useEffect(() => {
    if (projectData) {
      try {
        const updatedReleaseDate = projectData.releaseDate 
        ? (typeof projectData.releaseDate === 'string' 
            ? projectData.releaseDate.split('T')[0] 
            : projectData.releaseDate.toISOString().split('T')[0]
          )
        : '';

        setUpdateProject({
          ...projectData,
          releaseDate: updatedReleaseDate,
        });
      } catch (error) {
        console.error("Error converting release date:", error);
        // Handle the error, e.g., set a default release date or log the error
      }
    }
  }, [projectData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your update logic here
  };

  if (!projectData) {
    return <div>No project data available</div>;
  }

  const handleUpdate = async () => {

    setLoading(true)
    setTimeout(()=>{setLoading(false)},2000)

   

 

    
    let updatedReleaseDate;
   

if (projectData.releaseDate) {
  if (typeof updateProject.releaseDate === 'string') {
    // If it's a string, check if it already includes 'T'
    updatedReleaseDate = updateProject.releaseDate.includes('T') 
      ? updateProject.releaseDate 
      : `${updateProject.releaseDate}T00:00:00Z`;
  } else if (updateProject.releaseDate instanceof Date) {
    // If it's a Date object, convert it to ISO string
    updatedReleaseDate = updateProject.releaseDate.toISOString();
  }
} else {
  updatedReleaseDate = null;
}
   

    let newUpdateProject = {
      ...updateProject,
      releaseDate: updatedReleaseDate,
    };
    try {
      const response = await axios.post(
        `/update-project/${projectData?.id}`,
        newUpdateProject,
        
        
      );
    } catch (error) {
      console.log("Data Cannot Updated", error);
    }
  };

  return (
    <>
      <h1 className="text-center mb-[20px] font-serif font-bold text-xl text-[rgb(64, 81, 78)]">
        {projectData.name} 
      </h1>

      <div className="flex w-full">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            columnGap: "20px",
            rowGap: "40px",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              required
              id="outlined-required"
              label="Project Name"
              value={updateProject.name}
              variant="outlined"
              name="name"
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              required
              id="outlined-required"
              label="Project Duration"
              value={updateProject.duration}
              variant="outlined"
              name="duration"
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              required
              id="outlined-required"
              label="Project Number of Sprint"
              value={updateProject.noofsprint}
              variant="outlined"
              name="noofsprint"
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              required
              id="outlined-required"
              label="Project Resource"
              value={updateProject.resource}
              variant="outlined"
              name="resource"
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              required
              id="outlined-required"
              label="Project Type"
              value={updateProject.projectType}
              variant="outlined"
              name="projectType"
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              required
              id="outlined-required"
              label="Project Status"
              value={updateProject.projectStatus}
              variant="outlined"
              name="projectStatus"
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              required
              id="outlined-required"
              label="Approval Status"
              value={updateProject.approvalStatus}
              variant="outlined"
              name="approvalStatus"
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div>
            <TextField
              sx={{ width: "auto", minWidth: "400px" }}
              id="outlined-required"
              label="Release Date"
              value={updateProject.releaseDate || ""}
              type="date"
              variant="outlined"
              name="releaseDate"
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="w-full text-center flex justify-center mt-[20px] h-[100px]">
            <button
              type="submit"
              onClick={handleUpdate}
              className="w-[300px] bg-[#40514E] h-[40px] text-white font-serif font-semibold rounded-full flex justify-center items-center"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <RotatingLines
                  visible={true}
                  height="24"
                  width="24"
                  color="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                />
              ) : (
                "Update"
              )}
            </button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default EditProject;

// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// interface ProjectData {
//   id: number;
//   name: string;
//   resource: string;
//   projectType: string;
//   approvalStatus: string;
//   projectStatus: string;
//   duration: string;
//   noofsprint: string;
//   releaseDate: Date;
// }

// interface EditProjectProps {
//   projectData: ProjectData | null;
// }

// const EditProject: React.FC<EditProjectProps> = ({ projectData }) => {
//   const initialState = {
//     name: "",
//     releaseDate: "",
//     duration: "",
//     resource: "",
//     projectType: "",
//     approvalStatus: "",
//     projectStatus: "",
//     noofsprint: "",
//   };

//   const [updateProject, setUpdateProject] = useState(initialState);

//   useEffect(() => {
//     if (projectData) {
//       setUpdateProject({
//         name: projectData.name,
//         releaseDate: projectData.releaseDate.toISOString().split("T")[0], // Convert date to string in YYYY-MM-DD format
//         duration: projectData.duration,
//         resource: projectData.resource,
//         projectType: projectData.projectType,
//         approvalStatus: projectData.approvalStatus,
//         projectStatus: projectData.projectStatus,
//         noofsprint: projectData.noofsprint,
//       });
//     }
//   }, [projectData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUpdateProject((prev) => ({ ...prev, [name]: value }));
//   };

//   if (!projectData) {
//     return <div>No project data available</div>;
//   }

//   return (
//     <>
//       <h1 className="text-center mb-[20px] font-serif font-bold text-xl text-[rgb(64, 81, 78)] ">
//         {projectData.name} has been Selected
//       </h1>

//       <div className="flex w-full ">
//         <Box
//           component="form"
//           sx={{
//             "& .MuiTextField-root": { m: 1, width: "25ch" },
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             columnGap: "20px",
//             rowGap:"40px"
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               required
//               id="outlined-required"
//               label="Project Name"
//               value={updateProject.name}
//               variant="outlined"
//               name="name"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               required
//               id="outlined-required"
//               label="Project Duration"
//               value={updateProject.duration}
//               variant="outlined"
//               name="duration"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               required
//               id="outlined-required"
//               label="Project Number of Sprint"
//               value={updateProject.noofsprint}
//               variant="outlined"
//               name="noofsprint"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               required
//               id="outlined-required"
//               label="Project Resource"
//               value={updateProject.resource}
//               variant="outlined"
//               name="resource"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               required
//               id="outlined-required"
//               label="Project Type"
//               value={updateProject.projectType}
//               variant="outlined"
//               name="projectType"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               required
//               id="outlined-required"
//               label="Project Status"
//               value={updateProject.projectStatus}
//               variant="outlined"
//               name="projectStatus"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               required
//               id="outlined-required"
//               label="Approval Status"
//               value={updateProject.approvalStatus}
//               variant="outlined"
//               name="approvalStatus"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div>
//             <TextField
//               sx={{ width: "auto", minWidth: "400px" }}
//               id="outlined-required"
//               label="Release Date"
//               value={updateProject.releaseDate}
//               type="date"
//               variant="outlined"
//               name="releaseDate"
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>

//           <div className="w-full text-center mt-[20px] h-[100px]">
//             <button className="w-[300px] bg-[#40514E] h-[40px] text-white font-serif font-semibold rounded-full">
//               Update
//             </button>
//           </div>
//         </Box>
//       </div>
//     </>
//   );
// };

// export default EditProject;
