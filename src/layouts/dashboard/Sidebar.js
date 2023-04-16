import { useState } from "react";
import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import Logo from "../../assets/Images/logo.ico";

import { Nav_Buttons, Profile_Menu } from "../../data";

import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { useNavigate } from "react-router-dom";

const getPath = (index) => {
  console.log(index)
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/settings";
  }
};

const getMenuPath=(index)=>{
  switch(index){
case 0:
return "/profile"
case 1:

return "/settings"
case 2:


return  "/auth/login"



  }
}



const Sidebar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [Selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: "100px",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "64px",
              width: "64px",
              borderRadius: 1.5, //12px/8px  8 is default spacing in mui
            }}
          >
            <img src={Logo} alt="chatapplogo" />
          </Box>

          <Stack
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
            spacing={2}
          >
            {Nav_Buttons.map((el,index) =>
              el.index === Selected ? (
                <Box
               
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton key={`navbutton${index}`}
                    onClick={() => {
                      navigate(getPath(index));
                      setSelected(el.index);
                     
                    }}
                    sx={{ width: "max-content", color: "white" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton key={`navbutton${index}`}
                  onClick={() => {
                    setSelected(el.index);
                    navigate(getPath(index));
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: "48px" }} />
            {Selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton   onClick={() => {
                 
                  navigate(getPath(3))
                }}    sx={{ width: "max-content", color: "white" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                  navigate(getPath(3))
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch
            onClick={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={()=>{handleClick()}}
            src={""}
          ></Avatar>
          <Menu
            id="demo-positioned-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el,index) => (
                <MenuItem  onClick={()=>{handleClick()}} >
                  <Stack onClick={()=>{navigate(getMenuPath(index))}}
                    sx={{ width: 100 }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
