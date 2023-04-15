import { useTheme } from "@mui/material/styles";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material"

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const ChatElement=(id,name,img,msg,time,unread,online)=>{
    const theme=useTheme()
    return (
        <Box  sx={{width:"100%",
       
        borderRadius:1,
        backgroundColor:theme.palette.mode==='Light'?"#fff":theme.palette.background.default
    }}
        p={2}>

<Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} > 
<Stack direction={"row"} spacing={2} >
    <StyledBadge  overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"  ><Avatar src="" />
</StyledBadge>
<Stack spacing={0.3}>
<Typography variant='subtitle' >
sreyash
</Typography>
<Typography variant='caption' >
how are u
</Typography>
</Stack>


</Stack>

<Stack spacing={2} alignItems={"center"} >
    <Typography sx={{fontWeight:600}} variant='caption' >
        9:36 
    </Typography>
    <Badge color='primary' badgeContent={2} >

    </Badge>
</Stack>
 
</Stack>

       

        </Box>
    )
}

export default ChatElement