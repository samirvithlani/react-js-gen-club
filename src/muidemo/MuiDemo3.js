import { Box, Button, Container, Grid, Slider, Switch } from '@mui/material'
import React from 'react'

export const MuiDemo3 = () => {
    return (
        <div>
            <Container maxWidth="7m" style={{ color: "red" }}>
                Hello
            </Container>


            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                    <input type="text" placeholder="Enter Name" />
                </Grid>
                <Grid item xs={8}>
                    <input type="text" placeholder="Enter Name" />
                </Grid>
                <Grid item xs={8}>
                    <input type="text" placeholder="Enter Name" />
                </Grid>
                <Grid item xs={8}>
                    <input type="text" placeholder="Enter Name" />
                </Grid>
            </Grid>
            <Box sx={{
                width: '200px',
                height: '200px',
                backgroundColor: 'yellow',
                
            }}>

                <Slider
                    size='small'
                    defaultValue={50}
                    valueLabelDisplay='on'
                    color='primary'
                    step={20}
                    marks
                    max={500}
                    
                >

                </Slider>
                <Switch>
                    
                </Switch>
            </Box>
        </div>
    )
}

