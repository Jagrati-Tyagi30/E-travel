import React from 'react';
import {Card, 
    CardMedia, 
    CardContent, 
    Typography, 
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grade} from '@material-ui/icons';
import SearchBar from './SearchBar.js';
import Navbar from './Navbar.js';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    landing: {
        backgroundImage: "url(" + require("./landingPage.jpeg") + ")", 
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
                    <Card>
                        <CardMedia style = {{width: 70, height: 50}}
                            // className={classes.media}
                            image={require("./hotel1.jpg")}
                            title="hotel1"
                        />
                        <CardContent>
                            <Typography>Taj Palace</Typography>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                    <CardMedia
                            // className={classes.media}
                            image={require("./hotel2.jpg")}
                            title="hotel2"
                        />
                        <CardContent>
                            <Typography>Renaissance Hotel</Typography>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                    <CardMedia
                            // className={classes.media}
                            image={require("./hotel1.jpg")}
                            title="hotel1"
                        />
                        <CardContent>
                            <Typography>Renaissance Hotel</Typography>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade style = {{color:'#0b5563'}}/>
                            <Grade />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    </div>
    );
}