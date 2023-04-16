import { useTheme } from "@emotion/react";
import {  Stack, Switch } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";




const isAuthenticated=true;


const DashboardLayout = () => {


// if(!isAuthenticated){
//   return <Navigate to="/auth/login" />
// }



const theme=useTheme()





  return (
    <>
   <Stack  direction={"row"}>

  <Sidebar/>

   <Outlet />
   </Stack>
     
    </>
  );
};

export default DashboardLayout;
