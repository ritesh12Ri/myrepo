const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authoreName: String,
    category : String,
    year : Number
}, { timestamps: true })


module.exports = mongoose.model('Book', bookSchema) 
