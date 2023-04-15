import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledBadge from './StyledBadge'
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from 'phosphor-react'
import styled from '@mui/material/styles';

const StyledChatBox = styled(Box)(({ theme }) => ({
    "&:hover": {
      cursor: "pointer",
    },
  }));

const CallLogElement=({online,incoming,missed})=>{

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


const CallElement = () => {
  return (
    <div>CallElement</div>
  )
}

export {CallElement,CallLogElement} 