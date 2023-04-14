import { useTheme } from "@mui/material/styles";
import { Divider, Stack, Typography , Link, IconButton, Box, Menu, MenuItem} from "@mui/material";
import React from "react";
import { DotsThreeVertical, Download, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "../../data";

const DocMessage=({el})=>{
    const theme=useTheme()
    return (
<Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >

<Stack spacing={2}>
<Stack p={2}  direction={"row"} spacing={3} alignItems={"center"} sx={{backgroundColor:theme.palette.background.paper,borderRadius:1}}>
<Image size={48}></Image>
<Typography variant="caption" >Abstract.png</Typography>
<IconButton><DownloadSimple/></IconButton>
</Stack>
<Typography variant="body2"   sx={{ color:el.incoming? theme.palette.text:"#fff" }} >{el.message
}</Typography>

</Stack>


      </Box>
      <MessageOptions/>
      </Stack>
    )
}


const LinkMessage=({el})=>{
    const theme=useTheme()
    return (
<Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
<Stack spacing={2} >
<Stack p={2} spacing={3} alignItems={"center"}  sx={{backgroundColor:theme.palette.background.paper,borderRadius:1}} ></Stack>
<img src={el.preview} style={{maxHeight:210,borderRadius:"10px"}}  />
<Stack spacing={2} >
    <Typography variant="subtitle2" >Creating Chat App</Typography>
    <Typography variant="subtitle2" component={Link} to="'//https://www.youtube.com"   sx={{ color: theme.palette.primary.main }}   >www.youtube.com</Typography>
</Stack>

<Typography variant="body2" color={el.incoming?theme.palette.text:"#fff"} >
    {el.message}
</Typography>
</Stack>



      </Box>
      <MessageOptions/>
      </Stack>
    )
    
}



const ReplyMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction={"column"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography variant="body2" color={el.incoming?theme.palette.text:"white"}>
            {el.reply}
          </Typography>
        </Stack>
      
      </Box>
      <MessageOptions/>
    </Stack>
  );
};

const TimeLine = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />

      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {" "}
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const TextMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
    <MessageOptions/>
    </Stack>
  );
};

const MediaMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          borderRadius: 1.5,
          width: "max-content",
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            style={{ maxHeight: "210px", borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
    
      </Box>
      <MessageOptions/>
    </Stack>
  );
};


const MessageOptions=()=>{

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);
   const handleClick=(event)=>{
setAnchorEl(event.currentTarget)
   }
    const handleClose = () => {
      setAnchorEl(null);}










    return (<>

<DotsThreeVertical id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} size={20} />

<Menu
        id="demo-positioned-menu"
       
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
      >
       <Stack spacing={1}  px={1}>
        {Message_options.map((el)=>(
<MenuItem  >{el.title}</MenuItem>
))}

       </Stack>
      </Menu>

        </>
        
        
        
        )
    
}



export { TimeLine, TextMessage, MediaMessage, ReplyMessage,LinkMessage,DocMessage };
