// Connect to the Database

require('dotenv').config();
require('./config/database');

// Require the Mongoose models

const Todo = require('./models/Todo');

// Local variables will come in handy for holding retrieved documents

let todo;