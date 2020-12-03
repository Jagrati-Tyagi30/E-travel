import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: '#120309',
    paddingLeft: 100,
    paddingRight: 50,
    justifyContent: 'space-evenly' 
  },
}))

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs='4'style = {{marginLeft: 20, marginTop: 5}}>
            <Typography style = {{color: 'white'}}>+91 9XXXXXXXXX</Typography>
            <Typography style = {{color: 'white'}}>customercare@hotelier.com</Typography>
            <Typography style = {{color: 'white'}}>X - 000, abcde fghi, New Delhi - 1xxxxxx</Typography>
        </Grid>
        <Grid item xs = '5'>
          <Grid container spacing= {3} style = {{marginTop: '2%'}}>
            <Grid item>
              <Button style = {{color: 'white'}}>Contact Us</Button>
            </Grid>
            <Grid item>
              <Button style = {{color: 'white'}}>Terms of Use</Button>
            </Grid>
            <Grid item>
              <Button style = {{color: 'white'}}>Privacy Policy</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs = '2' style = {{ marginTop: 20}}>
            <a href='#'><img src = {require("./images/instagram.png")} style = {{width: 30, height: 30, marginRight: 10}}/></a>
            <a href='#'><img src = {require("./images/facebook.png")} style = {{width: 30, height: 30, marginRight: 10}}/></a>
            <a href='#'><img src = {require("./images/twitter.png")} style = {{width: 30, height: 30}}/></a>
        </Grid>
          <p style = {{marginLeft: 38, color: 'white'}}>
            &copy;{new Date().getFullYear()} HOTELIER | All rights reserved |
            Terms Of Service | Privacy
          </p>
      </Grid>
      </div>
  );
}