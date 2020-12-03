import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {Card, 
    CardMedia, 
    CardContent, 
    Typography, 
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grade} from '@material-ui/icons';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src="./images/hotel1.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="./images/hotelpage2.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="./images/hotelpage3.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
];

export default function HotelPage(){
    return(
        <div>
            <Navbar />
            <div style = {{marginTop: '20%'}}>
            <Grid container>
                <Grid item xs='6' style = {{paddingLeft: 100, paddingRight: 100}}>
                    <AliceCarousel style = {{width: 700, height: 600, marginBottom: 1000}}mouseTracking items={items} />
                </Grid>
                <Grid item  xs='4'>
                    <Typography>PRICE</Typography>
                    <Typography>Rs. 30,000 <span>/night</span></Typography>
                </Grid>
             </Grid>

            </div><br /><br /><br />
            <Footer />
        </div>
    );
}