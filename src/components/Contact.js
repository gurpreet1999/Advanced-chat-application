import { useTheme } from '@mui/material/styles'
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react'
import { toggleSidebar, updateSidebarType } from '../redux/slices/app'
import { useDispatch } from 'react-redux'
import AntSwitch from "./AntSwitch"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BlockDialog=({open,handleClose})=>{
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"Block This Contact"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
       Are You Sure you want to block this contact
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>cancel</Button>
      <Button onClick={handleClose}>yes</Button>
    </DialogActions>
  </Dialog>


  )
}

const DeleteDialog=({open,handleClose})=>{
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Delete this Chat</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
       Are You Sure you want to delete this chat?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>cancel</Button>
      <Button onClick={handleClose}>yes</Button>
    </DialogActions>
  </Dialog>


  )
}


const Contact = () => {


const [openBlock,setOpenBlock]=useState(false)
const [openDelete,setDeleteBlock]=useState(false)

const handleCloseBlock=()=>{
setOpenBlock(false)
}
const handleCloseDelete=()=>{
  setDeleteBlock(false)
}

  const dispatch=useDispatch()
  const theme=useTheme()
  return (
 <Box sx={{width:320, height:"100vh" }} >
  <Stack sx={{ height:"100%"}} >
    <Box sx={{boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",width:'100%',backgroundColor:theme.palette.mode=="Light"?"f8faff":theme.palette.background}}  >
<Stack spacing={3}   direction={"row"}  alignItems="center" justifyContent="space-between"  sx={{ height:"100%",p:2,}}>

  <Typography variant='subtitle2' >
    Contact info
  </Typography>
  <IconButton onClick={()=>{dispatch(toggleSidebar())}} >
    <X/>
  </IconButton>
</Stack>
    </Box>


<Stack sx={{height:"100%" , position:"relative",flexGrow:1,overflowY:"scroll"}} p={3}  spacing={3}>
<Stack  direction={"row"}   alignItems="center"  spacing={2}>
  <Avatar src="" sx={{width:64 , height:64}} />
<Stack spacing={0.5}>

  <Typography variant='article' fontWeight={600} >
atush
  </Typography>
  <Typography variant='body2' fontWeight={500} >
81533582984
  </Typography>
</Stack>

</Stack>

<Stack direction={"row"}  alignItems="center" justifyContent="space-evenly">
<Stack alignItems="center"  spacing={1}><IconButton ><VideoCamera/></IconButton> <Typography variant='overline'  >video</Typography></Stack>
<Stack alignItems="center"  spacing={1}><IconButton><Phone/></IconButton><Typography variant='overline'  >voice</Typography></Stack>
</Stack>
<Divider/>

<Stack spacing={0.5} >
<Typography variant='article' >About</Typography>
<Typography variant='body2' >Imagination is the only limit</Typography>
</Stack>
<Divider/>

<Stack direction={"row"}  alignItems="center" justifyContent="space-between">
<Typography variant='subtitle' >Media , Link & Docs</Typography>
<Button  onClick={()=>{dispatch(updateSidebarType("SHARRED"))}}  endIcon={<CaretRight/>} >
401
</Button>
  
  </Stack>
  <Stack direction={"row"} spacing={16}  alignItems="center" >
   {
[1,2,3].map((el)=>(
<Box>
  <img src=""/>
</Box>
)

)
   } 



  </Stack>
  <Divider/>
<Stack direction={"row"} alignItems="center" justifyContent="space-between">
<Stack direction={"row"}spacing={2} alignItems="center" >
<Star size={21} />
  <Typography variant='subtitle2' >Starred Message</Typography>
</Stack>
  
<IconButton  onClick={()=>{dispatch(updateSidebarType("STARRED"))}}   >
  <CaretRight/>
</IconButton>

</Stack>
<Divider/>
<Stack direction={"row"} alignItems="center" justifyContent="space-between">
<Stack direction={"row"}spacing={2} alignItems="center" >
<Bell size={21} />
  <Typography variant='subtitle2' >Mute Notifications</Typography>
</Stack>
  
<IconButton>
  <AntSwitch/>
</IconButton>

</Stack>
<Divider/>

<Typography variant='subtitle2' >1 group in common</Typography>
<Stack direction={"row"}spacing={2} alignItems="center" >
<Avatar src=""  />
<Stack  spacing={0.5} >
<Typography variant='subtitle2' >coding monk</Typography>
<Typography variant='caption' >owl, parrot ,rabbit</Typography>

</Stack>
</Stack>

<Stack direction={"row"}spacing={2} alignItems="center" >
<Button onClick={()=>{setOpenBlock(true)}}    startIcon={<Prohibit/>}   fullWidth variant='outlined' >
Block
</Button>
<Button  onClick={()=>{setDeleteBlock(true)}}   startIcon={<Trash/>}  fullWidth variant='outlined' >
  Delete
</Button>

</Stack>


</Stack>
  </Stack>

{openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock}  />}
{openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete}  />}


 </Box>
  )
}

export default Contact