import { alpha, AppBar, Avatar, Badge, Box, Button, IconButton, Input, InputAdornment, InputBase, Stack, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AndroidIcon from '@mui/icons-material/Android';
import SearchIcon from '@mui/icons-material/Search';
import { Mail, Notifications} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';


const Search = styled('div',{shouldForwardProp:(prop)=>prop!=='open'})(({theme,open})=>({
    
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    [theme.breakpoints.down('sm')]:{
        display: open? 'flex':'none'
    },
    [theme.breakpoints.up('sm')]:{
        width:'35%'
    }
}))
const StyledInputBase = styled(InputBase)(({theme})=>({
    padding: theme.spacing(0.5,1),
    fontSize: '0.8rem',
    color: 'white',
    width:'100%',
    
}))
const IconDiv = styled('div',{shouldForwardProp:(prop)=>prop!=='open'})(({theme,open})=>({
    display:'flex',
    gap: theme.spacing(2),
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
        display: open ? 'none' : 'flex'
    }

}))

const MobileSearch = styled(IconButton,{
    shouldForwardProp:(prop)=>prop!=='open'})(({theme,open})=>({
        [theme.breakpoints.down('sm')]:{
            display: open? 'none':'flex'
        },
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        },
    }))

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)


    
  return (
    <Box>
        <AppBar>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}} >
            <Stack sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <IconButton size='large' edge='start' color='inherit' >
                <AndroidIcon />
            </IconButton>
            <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}} >Tech Stack</Typography>
                <Typography variant='h6' sx={(theme)=>({
                    [theme.breakpoints.up('sm')]:{
                        display: 'none'
                    }
                })} >TECHSTACK</Typography>
            </Stack>
            <Search open={isOpen}>
            <StyledInputBase startAdornment={<SearchIcon/>} 
            endAdornment={
                isOpen ? (
                  <InputAdornment>
                    <CloseIcon
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    />
                  </InputAdornment>
                ) : null
              }
            placeholder='Search...' />
            </Search>
            <MobileSearch open={isOpen} onClick={()=>setIsOpen(true)} >
                <SearchIcon sx={{color:'whitesmoke'}}/>
            </MobileSearch>
            <IconDiv open={isOpen}>
                <Badge badgeContent='20' color='secondary'>
                    <Mail/>
                </Badge>
                <Badge badgeContent='5' color='secondary'>
                    <Notifications/>
                </Badge>
                <Avatar >
                <img width={40} src="https://randomuser.me/api/portraits/men/32.jpg" alt="Male Avatar" />
                </Avatar>
            </IconDiv>
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar
