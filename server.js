require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;

// Mongoose Connection has access to config -> database.js via dotenv
require('./config/database.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname,'build','favicon.ico')));
app.use(express.static(path.join(__dirname,'build')));

// API

app.use('/api/todo', require('./routes/api/todo'))

// Catch All API

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.listen(PORT, () => {
    console.log(`Backend is listening on ${PORT}`)
})