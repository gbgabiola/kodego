const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
require('dotenv').config();

const hostname = 'localhost';
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'hbs'); // Setting the handlebars as template engine
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

app.use(express.static(path.join(__dirname, 'public')));

// Defining routes
app.use('/', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
