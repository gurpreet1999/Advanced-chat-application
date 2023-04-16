import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledBadge from './StyledBadge'
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from 'phosphor-react'
import {styled} from '@mui/material/styles';
import  {useTheme}  from "@mui/material/styles";

const StyledChatBox = styled(Box)(({ theme }) => ({
    "&:hover": {
      cursor: "pointer",
    },
  }));

const CallLogElement=({online,incoming,missed})=>{
const theme=useTheme()
    return(<>
    
    <StyledChatBox
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={""} src={""} />
            </StyledBadge>
          ) : (
            <Avatar alt={""} src={""} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{"rohan"}</Typography>
            <Stack spacing={1} alignItems="center" direction={"row"}>
              {incoming ? (
                <ArrowDownLeft color={missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight color={missed ? "red" : "green"} />
              )}
              <Typography variant="caption">Yesterday 21:24</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Phone />

          <VideoCamera />
        </Stack>
      </Stack>
    </StyledChatBox>
    
    
    </>) 

}


const CallElement = ({name,img,online,handleClose}) => {

const theme=useTheme()


  return (
    <StyledChatBox
    sx={{
      width: "100%",

      borderRadius: 1,

      backgroundColor: theme.palette.background.paper,
    }}
    p={2}
  >
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={2}>
        {" "}
        <Avatar alt={name} src={img} />
        <Stack spacing={0.3} alignItems="center" direction={"row"}>
          <Typography variant="subtitle2">{name}</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <IconButton
          onClick={() => {
          
            handleClose();
          }}
        >
          <Phone style={{ color: theme.palette.primary.main }} />
        </IconButton>

        <IconButton
          onClick={() => {
           

            handleClose();
          }}
        >
          <VideoCamera style={{ color: theme.palette.primary.main }} />
        </IconButton>
      </Stack>
    </Stack>
  </StyledChatBox>
  )
}

export {CallElement,CallLogElement} 