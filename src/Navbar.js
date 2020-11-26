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
    // backgroundColor: '#e7a488'
    // position: 'absolute'
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
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <div >
      <AppBar position="fixed" style = {{background: '#120309', padding: 8}}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
              <Typography className={classes.title}  style = {{marginRight: 1000}} >
            HOTELIER
          </Typography>
          {/* <div style = {{marginRight: '18%'}}>
            <Link to = '/women'
            style = {{textDecoration: 'none'}}>
              <Button style = {{fontSize: 16, fontWeight: '600'}}>Women</Button>&nbsp;</Link>
            <Link to = '/men'
            style = {{textDecoration: 'none'}}>
              <Button style = {{fontSize: 16, fontWeight: '600'}}>Men</Button>&nbsp;</Link>
            <Link to = '/kids' 
            style = {{textDecoration: 'none'}}>
              <Button style = {{fontSize: 16, fontWeight: '600'}}>Kids</Button></Link>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>&nbsp;&nbsp; */}
          {/* <IconButton
            edge="end"
            color="inherit"
            // aria-label="open drawer"
          ><Book style = {{color: 'black'}}/></IconButton> */}
          {/* <Link to = '/cart'> */}
          <Button style = {{fontSize: 16, fontWeight: '600', color: 'white', marginRight: 20}}>Your Bookings</Button>
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
