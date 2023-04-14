import { useTheme } from "@emotion/react";
import {  Stack, Switch } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";







const DashboardLayout = () => {

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
