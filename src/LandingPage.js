import React from 'react';
import {Card, 
    CardMedia, 
    CardContent, 
    Typography, 
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Star} from '@material-ui/icons';
import SearchBar from './SearchBar.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    landing: {
        backgroundImage: "url(" + require("./images/landingPage.jpeg") + ")", 
        marginTop: '5%', 
        width: 1450, 
        height: 500,
        justifyContent: 'center'
    },
    grid: {
        textAlign: 'center', 
        marginTop: '7%', 
        marginLeft: '37%'
    }
  }));

export default function LandingPage(){
    const classes = useStyles();
    return(
    <div style = {{backgroundColor: '#ad9baa'}}>
        <Navbar />
        <div className = {classes.landing}>
        <Grid container >
        <Grid item xs className = {classes.grid}>
            <Typography style = {{fontSize: 40, fontWeight: '500'}}>FIND THE BEST HOTELS</Typography>
            <Typography style = {{fontSize: 35,fontWeight: '500',}}>AT THE</Typography>
            <Typography style = {{fontSize: 40, fontWeight: '500'}}>BEST PRICE</Typography>
        </Grid>
        </Grid>
        </div>
        <div style = {{marginLeft: '20%'}}>
            <SearchBar />
        </div>
        <div style = {{marginTop: '3%'}}>
            <Typography style = {{fontSize: 30, textAlign: 'center'}}>TOP 3 HOTELS</Typography><br />
            <Grid container spacing = {8} style = {{paddingLeft: 70, paddingRight: 70}}>
                <Grid item  xs> 
                    <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <Card>
                        <CardMedia style = {{width: 70, height: 50}}
                            // className={classes.media}
                            image={require("./images/hotel1.jpg")}
                            title="hotel1"
                        />
                        <CardContent>
                            <Typography>Taj Palace</Typography>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs>
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <Card>
                    <CardMedia
                            // className={classes.media}
                            image={require("./images/hotel2.jpg")}
                            title="hotel2"
                        />
                        <CardContent>
                            <Typography>Renaissance Hotel</Typography>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star />
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs>
                <Link to = '/hotelpage' style = {{textDecoration: 'none'}}>
                    <Card>
                    <CardMedia
                            // className={classes.media}
                            image={require("./images/hotel1.jpg")}
                            title="hotel1"
                        />
                        <CardContent>
                            <Typography>Renaissance Hotel</Typography>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star style = {{color:'#0b5563'}}/>
                            <Star />
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
            </Grid>
        </div><br /><br /><br />
        <Footer />
    </div>
    );
}