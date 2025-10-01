import React from 'react'
import { Container } from './LeftBar'
import { Stack, styled } from '@mui/material'
import Post from './Post'

const StyledDiv = styled('div')(({theme})=>({
   [theme.breakpoints.down('sm')]:{
   padding:theme.spacing(3)
   },
   [theme.breakpoints.up('sm')]:{
    padding:theme.spacing(4),
    paddingLeft:theme.spacing(9),
    
   },
   [theme.breakpoints.up('md')]:{
    marginLeft:theme.spacing(5),
    
   }
   ,
   [theme.breakpoints.up('lg')]:{
    margin:theme.spacing(4),
    marginLeft:theme.spacing(0),
    
   }
}))

function Feed() {
  return (
    <StyledDiv >
      <Post/>
    </StyledDiv>
  )
}

export default Feed
