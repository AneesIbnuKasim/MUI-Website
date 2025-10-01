import { Button, Card, CardActions, CardContent, CardMedia, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 250,
    
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
  }));

function Post() {


  return (
    <Stack spacing={2} >
    <Card elevation={5} >
      <StyledCardMedia component={'img'} image='https://picsum.photos/400/300'alt="Random Image" />
      <CardContent>
      <Typography variant='h5' >First Heading</Typography>  
      <Typography variant='body2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum excepturi ea aperiam esse laudantium delectus asperiores magni maxime placeat illo necessitatibus ducimus.</Typography>  
      </CardContent>
      <CardActions>
        <Button sx={{}}size='small' variant='contained'>Share</Button>
        <Button sx={{}}size='small' variant='outlined'>Learn More</Button>
      </CardActions>
    </Card>
    <Card elevation={5} >
      <StyledCardMedia component={'img'} image='https://picsum.photos/430/300'alt="Random Image" />
      <CardContent>
      <Typography variant='h5' >Second Heading</Typography>  
      <Typography variant='body2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum excepturi ea aperiam esse laudantium delectus asperiores magni maxime placeat illo necessitatibus ducimus.</Typography>  
      </CardContent>
      <CardActions>
        <Button sx={{}}size='small' variant='contained'>Share</Button>
        <Button sx={{}}size='small' variant='outlined'>Learn More</Button>
      </CardActions>
    </Card>
    <Card elevation={5} >
      <StyledCardMedia component={'img'} image='https://picsum.photos/400/200'alt="Random Image" />
      <CardContent>
      <Typography variant='h5' >Third Heading</Typography>  
      <Typography variant='body2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum excepturi ea aperiam esse laudantium delectus asperiores magni maxime placeat illo necessitatibus ducimus.</Typography>  
      </CardContent>
      <CardActions sx={{mb:1}}>
        <Button sx={{}}size='small' variant='contained'>Share</Button>
        <Button sx={{}}size='small' variant='outlined'>Learn More</Button>
      </CardActions>
    </Card>
    </Stack>
  )
}

export default Post
