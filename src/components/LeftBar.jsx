import { Home } from '@mui/icons-material'
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AppsIcon from '@mui/icons-material/Apps';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const Container = styled('div')(({theme})=>({
    height:'100vh',
    padding:theme.spacing(4,1,0,1),
    position:'fixed',
    [theme.breakpoints.up('sm')]:{
        backgroundColor:'white',
        color:'#555',
        border:'1px solid #ece7e7',
        width:160
    },
    [theme.breakpoints.up('md')]:{
        width:200
    },
    [theme.breakpoints.up('lg')]:{
        width:250
    }
}))

const ItemStack = styled(Stack)(({theme})=>({
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            marginBottom:theme.spacing(3),
            cursor:'pointer'
        },
        [theme.breakpoints.down('sm')]:{
            marginBottom:theme.spacing(4)
        },
        '& .home-icon':{
            [theme.breakpoints.up('sm')]:{
                fontSize:theme.typography.h6.fontSize
            }
        },
        ['& .MuiTypography-root']:{
            fontWeight:[500],
            [theme.breakpoints.down('sm')]:{
                display:'none'
            }
        }
}))

function LeftBar() {

  return (
    <Container sx={{backgroundColor:'primary.main',color:'white'}}>
        <ItemStack >
            <Home className='home-icon'  />
            <Typography variant='h6' >Homepage</Typography>
        </ItemStack>
        <ItemStack>
            <PeopleIcon className='home-icon'/>
            <Typography variant='h6' >Friends</Typography>
        </ItemStack>
        <ItemStack>
            <FormatListBulletedIcon className='home-icon' />
            <Typography variant='h6' >Lists</Typography>
        </ItemStack>
        <ItemStack>
            <CameraAltIcon className='home-icon' />
            <Typography variant='h6' >Camera</Typography>
        </ItemStack>
        <ItemStack>
            <OndemandVideoIcon className='home-icon' />
            <Typography variant='h6' >Videos</Typography>
        </ItemStack>
        <ItemStack>
            <AppsIcon className='home-icon' />
            <Typography variant='h6' >Apps</Typography>
        </ItemStack>
        <ItemStack>
            <CollectionsIcon className='home-icon' />
            <Typography variant='h6' >Collections</Typography>
        </ItemStack>
        <ItemStack>
            <LocalGroceryStoreIcon className='home-icon' />
            <Typography variant='h6' >Marketplace</Typography>
        </ItemStack>
        <ItemStack>
            <SettingsIcon className='home-icon' />
            <Typography variant='h6' >Settings</Typography>
        </ItemStack>
        <ItemStack>
            <LogoutIcon className='home-icon' />
            <Typography variant='h6' >Logout</Typography>
        </ItemStack>
    </Container>
  )
}

export default LeftBar
