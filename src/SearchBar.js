import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {Card, 
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button, 
    IconButton, 
    Typography, 
    InputBase,
    TextField, 
    InputAdornment} from '@material-ui/core';
// import DateFnsUtils from '@date-io/date-fns';
import {AccountCircle, Lock, Face, Email} from '@material-ui/icons';
// import Navbar from './Navbar.js'
// import Footer from './footer.js';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  } from '@material-ui/pickers';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: 'black',
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      },
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
    const [selectedInDate, setSelectedInDate] = React.useState(new Date('2020-08-18T21:11:54'));

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
    const [selectedOutDate, setSelectedOutDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleOutDateChange = (Outdate) => {
      setSelectedOutDate(Outdate);
    };
    return(
    <div className={classes.root}>
     <Card>
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
        </div>
    <MuiPickersUtilsProvider >
     <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="Check in Date"
          label="Check in Date"
          value={selectedInDate}
          onChange={handleInDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="Check out Date"
          label="Check out Date"
          value={selectedOutDate}
          onChange={handleOutDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">#Adults</InputLabel>
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
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
     </Card>
    </div>
    );
}