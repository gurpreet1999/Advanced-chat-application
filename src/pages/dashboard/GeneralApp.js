import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation/index"
import { useTheme } from "@emotion/react";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
const theme=useTheme()
const {sidebar}=useSelector((store)=>store.app)


  return (
    <>
    <Stack direction={"row"} sx={{width:"100%"}} >

    <Chats/>

<Box sx={{height:"100%",width:sidebar.open?"calc(100vw - 740px)":"calc(100vw - 420px)" , backgroundColor:theme.palette.mode==='Light'?"#F0F4FA":theme.palette.background.default  }} ><Conversation></Conversation></Box>

{sidebar.open && (()=>{

switch(sidebar.type){
case "CONTACT":
return <Contact/>

case "STARRED":
  return <StarredMessages/> 

case "SHARRED":
  return  <SharedMessages/>
  

}

})()}

    </Stack>
   
    </>
  );
};

export default GeneralApp;
