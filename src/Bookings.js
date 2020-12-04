import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {Card, 
    Button, 
    Typography, 
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ad9baa', 
        paddingTop: 50
    },
    heading: {
        textAlign: 'center', 
        fontSize: 40, 
        fontWeight: '600'
    },
    card: {
        width: 800, 
        height: 230,
        marginLeft: '20%'
    },
    hotel: {
        fontSize: 25, 
        marginTop: '4%', 
        fontWeight: '600'
    },
    image: {
        width: 250, 
        height: 230
    },
    info: {
        fontSize: 20
    },
    button:{
        backgroundColor: '#0b5563', 
        color: 'white', 
        marginTop: '3%'
    }
  }));

export default function Bookings(){
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <Navbar />
            <div style = {{marginTop: '5%', marginBottom: '8%'}}>
                <Typography className = {classes.heading}>YOUR BOOKINGS</Typography><br />
                <Card className ={classes.card}>
                    <Grid container spacing = {7}>
                    <Grid item xs='4'>
                        <img src = {require("./images/hotel1.jpg")} className ={classes.image}/>
                    </Grid>
                    <Grid item xs = '6'>
                        <Typography className = {classes.hotel}>TAJ PALACE</Typography><br />
                        <Typography className = {classes.info}>
                            <span style = {{fontWeight: '600'}}> Total Price:</span> Rs. 50,000 &nbsp; 
                        </Typography>
                        <Typography className = {classes.info}>
                            <span style = {{fontWeight: '600'}}> Room Type:</span> Single Bed Room
                         </Typography>
                        <Typography className = {classes.info}><span style = {{fontWeight: '600'}}> Dates:</span> 14th Dec - 19th Dec</Typography>
                        <Button className = {classes.button}>Cancel</Button>
                    </Grid>
                    </Grid>
                </Card><br />
                <Card className ={classes.card}>
                    <Grid container spacing = {7}>
                    <Grid item xs='4'>
                        <img src = {require("./images/hotel1.jpg")} className ={classes.image}/>
                    </Grid>
                    <Grid item xs = '6'>
                        <Typography className = {classes.hotel}>TAJ PALACE</Typography><br />
                        <Typography className = {classes.info}>
                            <span style = {{fontWeight: '600'}}> Total Price:</span> Rs. 50,000 &nbsp; 
                        </Typography>
                        <Typography className = {classes.info}>
                            <span style = {{fontWeight: '600'}}> Room Type:</span> Single Bed Room
                         </Typography>
                        <Typography className = {classes.info}><span style = {{fontWeight: '600'}}> Dates:</span> 14th Dec - 19th Dec</Typography>
                        <Button className = {classes.button}>Cancel</Button>
                    </Grid>
                    </Grid>
                </Card>
            </div>
            <Footer />
        </div>
    );
}