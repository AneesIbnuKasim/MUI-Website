import React from 'react'
import { Container } from './LeftBar'
import { Stack, styled } from '@mui/material'
import Post from './Post'

const StyledDiv = styled('div')(({theme})=>({
   [theme.breakpoints.down('sm')]:{
    margin:theme.spacing(3)
   },
   [theme.breakpoints.up('sm')]:{
    margin:theme.spacing(4),
    marginLeft:theme.spacing(9),
    
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
