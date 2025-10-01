import { useState } from 'react'
import Navbar from './components/Navbar'
import LeftBar from './components/LeftBar'
import { CssBaseline, Grid } from '@mui/material'
import Feed from './components/Feed'
import RightBar from './components/RightBar'

function App() {


  return (
    <>
        <CssBaseline />
        <Navbar/>
        <Grid container spacing={3} sx={{
           pt: { xs: 7, sm: 8, lg: 8 } 
           }}>
          <Grid size={{sm:3.1, lg:2}} >
            <LeftBar/>
          </Grid>
          <Grid size={{sm:6}} >
            <Feed/>
          </Grid>
          <Grid size={{sm:3}} >
            <RightBar/>
          </Grid>
        </Grid>
    </>
  )
}

export default App
