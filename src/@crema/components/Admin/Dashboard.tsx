"use client"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { Icon } from '@mui/material';
import { IconBase } from 'react-icons/lib';
import Image from 'next/image';



export type AdminProps={
    content:string;
    projectType:string;
    bgcolor?:string;
    link?:string;
    href?:string;
    Icon?:string |React.ElementType;
    src?:string;
}

const Dashboard: React.FC<AdminProps> = ({ content,projectType,bgcolor,link,Icon }) =>  {
    const theme = useTheme();
   
  return (
    <>
   
     {/* <Card sx={{ display: 'flex', flexWrap:"wrap",width:"300px",height:"200px",backgroundColor: bgcolor || 'white' }} /* onClick={handleClick} > */}
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', width:"200px" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          
          <Typography component="div" variant="h4">
            {content}
          </Typography>
          
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{color:"gray"}}>
           {projectType}
          </Typography>
        </CardContent>
      </Box> */}
      {/* <div className='w-[100px]'>
        <Image src={src} width={200}
      height={500} style={{height:"100%"}}
      alt="Picture of the author"></Image>
      </div> */}
      {/* <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="/assets/images/admincard-1.avif"
        alt="Live from space album cover"
      /> */}
    {/* </Card>  */}

    <Link href="/new-projects">
    <div className='w-[300px] h-[120px]  bg-purple-500  border-4 rounded-[50px] flex justify-center items-center shadow-sm shadow-gray-500  hover:bg-white ' >
      <div className=''>
        <h2 className='text-2xl  '>{content}</h2>
        <p className='text-center'>{projectType}</p>
      </div>
    </div>
     
    </Link>

    </>
  )
}

export default Dashboard;



  


