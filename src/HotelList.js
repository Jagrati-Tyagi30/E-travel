import React from 'react';
import HotelCard from './HotelCard.js';
import SearchBar from './SearchBar.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js'
import {Link} from 'react-router-dom';

export default function HotelList(){
    return(
        <div>
            <Navbar />
            <div style = {{marginTop: '7%', marginLeft: '18%'}}>
                <SearchBar />
            </div>
            <div style = {{marginTop: '5%', marginLeft: '24%', marginBottom: '10%'}}>
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <HotelCard />
                </Link><br />
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <HotelCard />
                </Link><br />
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <HotelCard />
                </Link><br />
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <HotelCard />
                </Link><br />
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <HotelCard />
                </Link><br />
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <HotelCard />
                </Link><br />
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <HotelCard />
                </Link>
            </div>
            <Footer />
        </div>
    );
}