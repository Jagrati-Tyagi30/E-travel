import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography, 
    Button,
    Grid} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Star, StarHalf,Clear, Done} from '@material-ui/icons';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src={require("./images/hotel1.jpg")} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={require("./images/hotelpage2.jpg")} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={require("./images/hotelpage3.jpg")} onDragStart={handleDragStart} className="yours-custom-class" />,
];
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#0b5563',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(type, wifi, breakfast, price, pay) {
    return { type, wifi, breakfast, price, pay };
  }
  
  const rows = [
    createData('Single Bed Room', <Done style = {{color: 'green'}}/>, <Clear style = {{color: 'red'}}/>, "Rs. 10,000", <Button style = {{backgroundColor: '#120309', color: 'white'}}>Pay Now</Button>),
    createData('Twin Bed Room', <Done style = {{color: 'green'}}/>, <Clear style = {{color: 'red'}}/>, "Rs. 14,500", <Button style = {{backgroundColor: '#120309', color: 'white'}}>Pay Now</Button>),
    createData('King Size Room', <Done style = {{color: 'green'}}/>, <Done style = {{color: 'green'}}/>, "Rs. 25,000", <Button style = {{backgroundColor: '#120309', color: 'white'}}>Pay Now</Button>),
    createData('Premium', <Done style = {{color: 'green'}}/>, <Done style = {{color: 'green'}}/>, "Rs. 30,000", <Button style = {{backgroundColor: '#120309', color: 'white'}}>Pay Now</Button>),
    createData('Suite', <Done style = {{color: 'green'}} />, <Done style = {{color: 'green'}}/>, "Rs. 50,000", <Button style = {{backgroundColor: '#120309', color: 'white'}}>Pay Now</Button>),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
  });
  
export default function HotelPage(){
    const classes = useStyles();
    return(
        <div style = {{backgroundColor: '#ad9baa'}}>
            <Navbar />
            <div style = {{paddingLeft: 100, paddingRight: 80, }}>
            <Grid container >
                <Grid item xs='7' style = {{marginTop: '30%'}}>
                    <AliceCarousel style = {{width: 650, height: 600, marginBottom: 1000}}mouseTracking items={items} />
                </Grid>
                <Grid item  xs='3'style = {{marginTop: '10%'}}>
                    <Typography style = {{fontWeight: '600', fontSize: 35}}>PRICE <span style = {{fontSize: 17, fontWeight: '400'}}>(lowest)</span></Typography>
                    <Typography style = {{fontSize: 40}}>Rs. 10,000 <span style = {{fontSize: 20}}>/night</span></Typography><br />
                    <Star style = {{color:'#0b5563'}}/>
                    <Star style = {{color:'#0b5563'}}/>
                    <Star style = {{color:'#0b5563'}}/>
                    <Star style = {{color:'#0b5563'}}/>
                    <Star style = {{color:'#0b5563'}}/>
                </Grid>
             </Grid><br />
             <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Available Room Types</StyledTableCell>
                        <StyledTableCell align="right">Free Wifi</StyledTableCell>
                        <StyledTableCell align="right">Breakfast Included&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Pool Facility&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">No. of People&nbsp;</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.type}>
                        <StyledTableCell component="th" scope="row">
                            {row.type}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.wifi}</StyledTableCell>
                        <StyledTableCell align="right">{row.breakfast}</StyledTableCell>
                        <StyledTableCell align="right">{row.price}</StyledTableCell>
                        <StyledTableCell align="right">{row.pay}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div><br /><br /><br /><br />
            <Footer />
        </div>
    );
}