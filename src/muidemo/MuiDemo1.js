import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LoadingButton from '@mui/lab/LoadingButton';

export const MuiDemo1 = () => {
    return (
        <div>
            <Box sx={{
                width: '1000px',
                height: '200px',
                backgroundColor: 'pink',
                '&:hover': {
                    backgroundColor: 'blue',
                    opacity: '0.5'

                },
            }}>


                <Button variant="contained" color="primary" size="large">CLICK</Button>
                <Button variant="outlined" color="success" size="medium">CLICK</Button>
                <Button variant="text" color="secondary">CLICK</Button>
                <Button variant="text" color="error" size="small">CLICK</Button>

                <Button variant='outline' color='primary' size='small' startIcon={<DeleteIcon />}>DELETE</Button>
                <Button variant='outline' color='primary' size='small' endIcon={<CameraAltIcon />}>PIC</Button>
                <IconButton>
                    <AddBoxIcon />
                </IconButton>


            </Box>
            <LoadingButton loading>
                
            </LoadingButton>


        </div>
    )
}
