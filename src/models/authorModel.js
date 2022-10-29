const mongoose = require('mongoose');

const newAuthorSchema = new mongoose.Schema({
    author_id: String,
    author_name: String,
    age: Number,
    address: String,
    rating: 2

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', newAuthorSchema)
