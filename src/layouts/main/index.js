import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico"

const MainLayout = () => {
  return (
    <>
      <Container sx={{mt:5}} maxWidth="sm"  >
    <Stack spacing={5} >

<Stack direction={"column"} alignItems={"center"}   sx={{width:"100%"}}>
  <img style={{height:120,width:120}} src={Logo}  />
</Stack>

    </Stack>
        {/* <div>Main Layout</div> */}
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
