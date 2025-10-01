import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const StyledImageList = styled(ImageList)(({theme})=>({
    [theme.breakpoints.up('sm')]:{
      width:200
    },
    [theme.breakpoints.up('md')]:{
      width:250
    },
    [theme.breakpoints.up('lg')]:{
      width:300
    },
    [theme.breakpoints.up('xl')]:{
      width:400
    },
}))

function RightBar() {


  return (
    <Stack spacing={3} pt={4} pr={3} sx={{display:{xs:'none',sm:'block'},position:'fixed'}}>
      
      <Stack spacing={1}>
        <Typography>Online Friends</Typography>
        <AvatarGroup max={5} >
        <Avatar src='https://randomuser.me/api/portraits/men/32.jpg' ></Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/34.jpg' ></Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/24.jpg' ></Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/37.jpg' ></Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/42.jpg' ></Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/31.jpg' ></Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/44.jpg' ></Avatar>
      </AvatarGroup>
      </Stack>
      <Stack>
        <Typography>Gallery</Typography>
        <StyledImageList variant='quilt' sx={{ height: 300 }} cols={1} rowHeight={150}  >
          <ImageListItem>
            <img src='https://picsum.photos/800/600?random=1' alt='gallery img' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://picsum.photos/800/600?random=6' alt='gallery img' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://picsum.photos/800/600?random=43' alt='gallery img' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://picsum.photos/800/600?random=41' alt='gallery img' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://picsum.photos/800/600?random=82' alt='gallery img' />
          </ImageListItem>
        </StyledImageList>
      </Stack>
      <Stack spacing={1}>
        <Typography>Categories</Typography>
        <Link>Sport</Link>
        <Link>Food</Link>
        <Link>Music</Link>
        
        <Link>Movies</Link>
        <Link>Science</Link>
        <Link>Life</Link>

      </Stack>
    </Stack>
  )
}

export default RightBar
