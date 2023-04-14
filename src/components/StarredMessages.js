import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowLeft } from 'phosphor-react';
import React from 'react'
import Conversation from './conversation';
import { useDispatch } from 'react-redux';
import { updateSidebarType } from '../redux/slices/app';

const StarredMessages = () => {

const theme=useTheme()
const dispatch=useDispatch()



  return (
    <Box sx={{ width: 320, maxHeight: "100vh" }}>
    <Stack sx={{ height: "100%" }}>
      <Box
        sx={{
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
        }}
      >
        <Stack
          sx={{ height: "100%", p: 2 }}
          direction="row"
          alignItems={"center"}
          spacing={3}
        >
          <IconButton
            onClick={() => {
              dispatch(updateSidebarType("CONTACT"));
            }}
          >
            <ArrowLeft />
          </IconButton>
          <Typography variant="subtitle2">Starred Messages</Typography>
        </Stack>
      </Box>
      <Stack
        sx={{
          height: "100%",
          position: "relative",
          flexGrow: 1,
          overflow: "scroll",
        }}
        spacing={3}
      >
        <Conversation />
      </Stack>
    </Stack>
  </Box>
  )
}

export default StarredMessages