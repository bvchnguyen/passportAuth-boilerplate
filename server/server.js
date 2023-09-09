const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const app = express();

const { db } = require('./db/db');
const { readdirSync } = require('fs');

const path = require('path');
const flash = require('connect-flash'); 
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


require('dotenv').config();
const PORT = process.env.PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({}))
app.use(
    session({
    secret: process.env.client_secret,
    resave: false,
    saveUninitialized: false
  
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));
require('./controllers/passport')(passport);


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Listening to port: ', PORT)
    })
};
app.get('/', (req, res)=> {
    res.render('home', {
        local_css: "home.css",
    });
})

// Routes
readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)));

server();