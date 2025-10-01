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
          <Grid size={{sm:2,xs:1,lg:1}} >
            <LeftBar/>
          </Grid>
          <Grid size={{sm:10,xs:11,lg:7}} >
            <Feed/>
          </Grid>
          <Grid size={{sm:0,xs:0,lg:4}} >
            <RightBar/>
          </Grid>
        </Grid>
    </>
  )
}

export default App
