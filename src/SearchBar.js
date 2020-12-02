import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {FormControl,
    InputLabel,
    Select,
    Button,
    MenuItem,
    InputBase,
    Typography} from '@material-ui/core';
import {AccountCircle, Lock, Face, Email} from '@material-ui/icons';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: 'black',
    backgroundColor: fade(theme.palette.common.black, 0.35),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.45),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    marginTop: '1%'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      },
  },
  searchBar: {
     width: 900, 
     height: 180, 
     display: 'inline-block', 
     borderWidth: 3, 
     borderColor: 'black', 
     backgroundColor: '#ffffff', 
     boxShadow: '5px 10px #888888'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchBar(){
    const classes = useStyles();
    const [selectedInDate, setSelectedInDate] = React.useState(new Date());

    const [adults, setAdults] = React.useState('');

    const handleAdultChange = (event) => {
    setAdults(event.target.value);
    };
    const [kids, setKids] = React.useState('');

    const handleKidChange = (event) => {
    setKids(event.target.value);
    };
    const handleInDateChange = (Indate) => {
      setSelectedInDate(Indate);
    };
    const [selectedOutDate, setSelectedOutDate] = React.useState(new Date());

    const handleOutDateChange = (Outdate) => {
      setSelectedOutDate(Outdate);
    };
    return(
    <div className={classes.root}>
     <div className = {classes.searchBar}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Which area?"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div><br />
        <div style = {{display: 'inline-block', marginLeft: '10%'}}>
        <Typography style = {{textAlign: 'left'}}>From <span style = {{marginLeft: 132}}>To</span></Typography>
        <DatePicker
        onChange={handleInDateChange}
        value={selectedInDate}
        calendarAriaLabel = "In-Date"
      />&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Typography>To</Typography> */}
        <DatePicker 
        onChange={handleOutDateChange}
        value={selectedOutDate}
      />&nbsp;&nbsp;
        </div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" style = {{color: 'black'}}>#Adults</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={adults}
          onChange={handleAdultChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" style = {{color: 'black'}}>#Kids</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={kids}
          onChange={handleKidChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <Button style = {{marginLeft: 15, backgroundColor: '#0b5563', color: 'white'}}>Search</Button>
     </div>
    </div>
    );
}