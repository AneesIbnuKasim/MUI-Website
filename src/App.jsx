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
        <Grid container sx={{
           pt: 6 
           }}>
          <Grid size={{sm:2, md:2, xs:1,lg:2}}>
            <LeftBar/>
          </Grid>
          <Grid size={{sm:6,md:7,xs:11,lg:7}} >
            <Feed/>
          </Grid>
          <Grid size={{xs:0,sm:2,md:3, lg:3}} >
            <RightBar/>
          </Grid>
        </Grid>
    </>
  )
}

export default App
