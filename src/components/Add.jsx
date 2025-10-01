import { AddBox } from '@mui/icons-material'
import { Alert, Box, Button, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

function Add() {
    const [open, setOpen] = useState(false)
    const [snackOpen, setSnackOpen] = useState(false)

    const handleClose = ()=>{
        setSnackOpen(false)
    }
  return (
    <>
    <Tooltip open={open} onClick={()=>setOpen(true)} onClose={()=>setOpen(false)} >
      <Fab  size='large' sx={{position:'fixed', bottom:20,right:20,color:'white',backgroundColor:'primary.main'}} >
        <AddBox/>
      </Fab>
    </Tooltip>
    <Modal open={open} onClose={()=>setOpen(false)}>
        <Box sx={{width:'50%',height:'80%',backgroundColor:'white',position:'absolute',top:0,left:0,bottom:0,right:0,margin:'auto', borderRadius:'15px',alignItems:'center'}} >
            <form>
            <Stack spacing={3} sx={{p:3}}>
            <TextField variant='standard' sx={{outlineColor:'none'}} label='Title' />
            <TextField size='large' rows={5} multiline variant='outlined' sx={{outlineColor:'none'}} label='Tell your story...' />
            <TextField variant='standard' select defaultValue='Public' label='visibility'>
            <MenuItem value='public' >Public</MenuItem>
            <MenuItem value='private' >Private</MenuItem>
            <MenuItem value='unlisted' >Unlisted</MenuItem>
            </TextField>
            <Stack>
            <FormLabel>Who can Comment?</FormLabel>
            <RadioGroup>
                <FormControlLabel label='Everyone' value={'all'} control={<Radio size='small'/>} />
                <FormControlLabel label='My Friends' value={'friends'} control={<Radio size='small'/>} />
                <FormControlLabel label='Nobody' value={'none'} control={<Radio size='small'/>} />
                <FormControlLabel label='Custom (premium)' disabled value={'custom'} control={<Radio size='small'/>} />
            </RadioGroup> 
            </Stack>
            <Stack spacing={2} direction={'row'}>
            <Button variant='outlined' onClick={()=>setSnackOpen(true)}  color='primary' >CREATE</Button>
            <Button variant='outlined' onClick={()=>setOpen(false)} color='error' >CANCEL</Button>
            </Stack>
            </Stack>
            </form>
            <Snackbar open={snackOpen} autoHideDuration={4000} onClose={handleClose}
            anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
            sx={{bottom:'150px'}}
            >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Posted Successfully!
        </Alert>
      </Snackbar>
        
        </Box>
    </Modal>
    </>
  )
}

export default Add
