const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
var cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const users = require('./routes/user_router');

const app = express();

app.use('/users', users);

app.get('/', (req, res) => res.send('GET users'));

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);