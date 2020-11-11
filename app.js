const express = require('express')
,     routes = require('./routes')
,     user = require('/routes/user')
,     http = require('http')
,     path = require('path');

const sessio = require('express-session');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'jagriti',
    password: '',
    database: 'e-travel'
});

connection.connect();
global.db = connection;

// all environment variables
app.set('port', process.env.PORT || 3060);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// development only
 
app.get('/', routes.index);   //call for main index page
app.get('/signup', user.signup);   //call for signup page
app.post('/signup', user.signup);  //call for signup post 
app.get('/login', routes.index);   //call for login page
app.post('/login', user.login);    //call for login post
app.get('/home/dashboard', user.dashboard);     //call for dashboard page after login
app.get('/home/logout', user.logout);    //call for logout
app.get('/home/profile',user.profile);   //to render users profile

//Middleware
app.listen(3060)