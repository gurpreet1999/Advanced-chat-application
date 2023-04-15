import { useTheme } from '@emotion/react'
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react'
import React from 'react'
import Shortcuts from '../../sections/setting/Shortcuts'
import { useState } from 'react'

const Setting = () => {

const [openShortcut,setOpenShortcut]=useState(false)
const handleOpenShortcut=()=>{
  setOpenShortcut(true)
}

const handleCloseShortcut=()=>{
  setOpenShortcut(false)
}



const theme=useTheme()
const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcut,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
    <Stack direction="row" sx={{ width: "100%" }}>

<Box
          sx={{
            overflowY: "scroll",
     
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
  <Stack p={4} spacing={5}>

{/* {//header} */}
    <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton  onClick={""}>
                <CaretLeft size={24} color={"#4B4B4B"} />
              </IconButton>

              <Typography variant="h5">Settings</Typography>
            </Stack>


{/* profile */}

<Stack direction="row" spacing={3}>

<Avatar
                src={""}
                sx={{ height: 56, width: 56 }}
              />
<Stack spacing={0.5}  >
<Typography variant="article">{"simran"}</Typography>
<Typography variant="body2">exploring</Typography>
</Stack>

</Stack>

<Stack  spacing={4}>
{list.map(({key,icon,title,onclick})=><>

<Stack
                      onClick={onclick}
                      sx={{ cursor: "pointer" }}
                      spacing={2}
                    >
                      <Stack alignItems={"center"} direction="row" spacing={2}>
                        {icon}
                        <Typography variant="body2">{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
</>)}
</Stack>




  </Stack>



        </Box>



    </Stack>
   {openShortcut &&  <Shortcuts open={openShortcut} handleClose={handleCloseShortcut}   />}
    </>
  )
}

export default Setting