import React from 'react';
import {Card, 
    Typography, 
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Star, StarHalf} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    card: {
        width: 700, 
        height: 250
    },
    hotel: {
        fontSize: 25, 
        marginTop: '20%', 
        fontWeight: '600'
    },
    image: {
        width: 350, 
        height: 250
    },
    price: {
        fontSize: 20
    }
  }));

export default function HotelCard(){
    const classes = useStyles();
    return(
        <Card className = {classes.card}> 
            <Grid container>
                <Grid item xs='7'>
                    <img src = {require("./images/hotel1.jpg")} className = {classes.image}/>
                </Grid>
                <Grid item xs = '3'>
                    <Typography className = {classes.hotel}>TAJ PALACE</Typography>
                    <Typography className = {classes.price}>Rs. 10,000</Typography><br />
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
