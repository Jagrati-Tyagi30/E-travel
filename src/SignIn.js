import React from 'react';
import {Card, 
    CardActions, 
    CardContent, 
    Button, 
    Typography, 
    TextField, 
    IconButton, 
    InputAdornment} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {AccountCircle, Lock, Visibility, VisibilityOff} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%', 
        backgroundColor: '#ad9baa',
      },
    card: {
        width: 300,
        height: 250,
        marginTop: 260,
        marginBottom: 260,
        boxShadow: '0 0 0.3rem 0.4rem rgba(0,0,0,.1)',
        padding: 30,
        backgroundColor: '#fof7f4'
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
      },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
  }));

export default function SignIn(){
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
        <div>
        <Navbar /> 
        <div className={classes.root}>
                {/* <img src = {require('./logo.jpg')} height = '100' width = '400' style = {{marginTop: '10%'}}/> */}
            <Card className={classes.card} variant="outlined">
             <CardContent>
                 <Typography className = {classes.title}> 
                     SIGN IN
                 </Typography><br />
                 <TextField
                    className={classes.margin, classes.textField}
                    id="input-with-icon-textfield"
                    placeholder="UserName"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                /><br /><br />
                {/* <FormControl className={clsx(classes.textField)}> */}
                {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
                <TextField
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    placeholder = 'Password'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Lock />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                        }}
                /><br /><br />
                <Typography style = {{fontSize: 12, textAlign: 'center'}}>Don't have an account yet? Sign Up!</Typography>
                {/* </FormControl> */}
             </CardContent>
             <CardActions style = {{justifyContent: 'center'}}>
                 {/* <Link to = '/' style = {{textDecoration: 'none '}}> */}
                 <Button size="medium" variant="contained" style= {{backgroundColor: '#0b5563', color: 'white',fontWeight: '600'}}>Sign In</Button>
                 {/* </Link> */}
                {/* <Link to = '/signup' style = {{textDecoration: 'none'}}> */}
                    <Button size="medium" variant="contained" 
                        style= {{backgroundColor: '#0b5563',color: 'white', fontWeight: '600'}}>
                        Sign Up
                    </Button>
                {/* </Link> */}
            </CardActions>
        </Card>
        </div>
        </div>
    );
}
