import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneRight,
  PaperPlaneTilt,
  Phone,
  VideoCamera,
} from "phosphor-react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width="100%">
      <Header />

      <Box sx={{ width: "100%", flexGrow: 1,height:"100%" , overflowY:"scroll" ,backgroundColor:"#F0F4FA" }}>
        <Message/>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
