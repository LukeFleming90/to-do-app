const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema ({
    title: String,
    isComplete: Boolean
})

module.exports = mongoose.model('Todo', todoSchema);