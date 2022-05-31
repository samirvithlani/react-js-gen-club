import { Button, ButtonGroup, Fab } from '@mui/material'
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


export const MuiDemo2 = () => {
    return (
        <div>

            <ButtonGroup variant='contained'>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </ButtonGroup>
            <Fab color='red' >
                <AddBoxIcon />
            </Fab>
            <Fab color='red' >
                <DeleteIcon />
            </Fab>
            <Fab color='red' >
                <CameraAltIcon/>
            </Fab>
        </div>
    )
}
