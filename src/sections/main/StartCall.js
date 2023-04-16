import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElement';
import { MemberList } from '../../data';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  })


const StartCall = ({open,handleClose}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle>{"Start New Conversation"}</DialogTitle>
      <Stack p={1} sx={{ width: "100%" }}>
        <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color="#709CE6" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Stack>
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {MemberList.map((el, idx) => {
              return <CallElement key={idx} {...el} handleClose={handleClose} />;
            })}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default StartCall