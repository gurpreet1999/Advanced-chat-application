
import {  Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { useTheme } from '@emotion/react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/search';
import ChatElement from '../../components/ChatElement';





const Chats = () => {

const theme=useTheme()

  return (
    <Box sx={{position:"relative",width:320,backgroundColor:theme.palette.mode==='Light'?'#F8FAFF':theme.palette.background.paper ,boxShadow:"0px 0px 2px rgba(0,0,0,0.25)"}}>
<Stack p={3} spacing={2} >

<Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
<Typography variant='h5'>chats</Typography>
<IconButton><CircleDashed></CircleDashed></IconButton>

</Stack>

<Stack sx={{width:"100%"}} >
<Search>
    <SearchIconWrapper>
        <MagnifyingGlass color='#709CE6' ></MagnifyingGlass>
    </SearchIconWrapper>
    <StyledInputBase placeholder="Search..."></StyledInputBase>
</Search>


</Stack>

<Stack spacing={1} >
    <Stack direction={"row"} alignItems={"center"} spacing={1.5} >
    <ArchiveBox size={"24px"} />
    <Button>Archive</Button>
    </Stack>
    <Divider/>
</Stack>
<Stack spacing={2} direction={"column"} sx={{flexGrow:1,height:"100"}} >
   <SimpleBarStyle timeout={500} clickOnTrack={false} >
   <Stack spacing={2.4}>
<Typography variant='subtitle' sx={{color:'#676767'}}>Pinned</Typography>

{
    ChatList.filter((el)=>el.pinned).map((el)=>{
        return <ChatElement {...el} />
    })
}
    </Stack>
    <Stack spacing={2.4}>
<Typography variant='subtitle' sx={{color:'#676767'}}>All Chats</Typography>

{
    ChatList.filter((el)=>!el.pinned).map((el)=>{
        return <ChatElement {...el} />
    })
}
    </Stack>
   </SimpleBarStyle>

</Stack>

</Stack>



    </Box>
  )
}

export default Chats