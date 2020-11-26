import React from 'react';
import {Card, 
    CardMedia, 
    CardContent, 
    Button, 
    Typography, 
    Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grade} from '@material-ui/icons';
import SearchBar from './SearchBar.js';
import Navbar from './Navbar.js';

export default function LandingPage(){
    return(
    <div>
        <Navbar />
        <div style = {{backgroundImage: "url(" + require("./landingPage.jpeg") + ")", marginTop: '5%', width: 1450, height: 200,}}>
        <Grid container >
        <Grid item xs style = {{textAlign: 'center', marginTop: '7%', marginLeft: '37%'}}>
            <Typography style = {{fontSize: 40, fontWeight: '500'}}>FIND THE BEST HOTELS</Typography>
            <Typography style = {{fontSize: 35,fontWeight: '500',}}>AT THE</Typography>
            <Typography style = {{fontSize: 40, fontWeight: '500'}}>BEST PRICE</Typography>
        </Grid>
        </Grid>
        </div><br /><br /><br />
        <div style = {{marginTop: '10%'}}>
            <Typography style = {{fontSize: 30}}>TOP 3 HOTELS</Typography><br />
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