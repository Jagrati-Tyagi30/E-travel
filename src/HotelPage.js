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

export default function HotelPage(){
    return(
        <div>
            <Navbar />
            <div>

            </div>
            <Footer />
        </div>
    );
}