const cookieParser = require('cookie-parser');
const express = require('express');
const mysql = require('mysql2');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();

const app = express();
const hostname = 'localhost';
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/student', require('./routes/student'));

app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
