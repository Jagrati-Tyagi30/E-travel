import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {AccountCircle, ShoppingCart, Book} from '@material-ui/icons';
import {AppBar, 
      Toolbar, 
      IconButton, 
      Typography, 
      InputBase,
      Button, } from '@material-ui/core';
  import {Link} from'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    textDecoration: 'none',
    fontFamily: 'Dancing Script', 
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    color: 'white',
    fontSize: 25
  },
  button: {
    fontSize: 16, 
    fontWeight: '600', 
    color: 'white', 
    marginRight: 20
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <div >
      <AppBar position="fixed" style = {{background: '#120309', padding: 8}}>
        <Toolbar>
              <Typography className={classes.title}  style = {{marginRight: 1000}} >
            HOTELIER
          </Typography>
          <Button className = {classes.button}>Your Bookings</Button>
          <IconButton
            edge="end"
            color="inherit"
            // aria-label="open drawer"
          ><ShoppingCart style = {{color: 'white'}}/></IconButton>
          {/* </Link> */}
          {/* <Link to = '/signin'> */}
          <IconButton
            edge="end"
            color="inherit"
            // aria-label="open drawer"
          ><AccountCircle style = {{color: 'white'}}/></IconButton>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}
