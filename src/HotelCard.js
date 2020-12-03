import React from 'react';
import {Card, 
    CardMedia, 
    CardContent, 
    Typography, 
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Star, StarHalf} from '@material-ui/icons';
import SearchBar from './SearchBar.js';

export default function HotelCard(){
    return(
        <Card style = {{width: 700, height: 250}}> 
            <Grid container>
                <Grid item xs='7'>
                    <img src = {require("./images/hotel1.jpg")} style = {{width: 350, height: 250}}/>
                </Grid>
                <Grid item xs = '3'>
                    <Typography style = {{fontSize: 25, marginTop: '20%', fontWeight: '600'}}>TAJ PALACE</Typography>
                    <Typography style = {{fontSize: 20}}>Rs. 10,000</Typography><br />
                    <Star style = {{color:'#0b5563'}}/>
                    <Star style = {{color:'#0b5563'}}/>
                    <Star style = {{color:'#0b5563'}}/>
                    <Star style = {{color:'#0b5563'}}/>
                    <Star />
                </Grid>
            </Grid>
        </Card>
    );
}
