const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    prices: {
        indianPrice: String,
        europePrice: String
    },
    year :{
        type : Number,
        default : 2021

    },
    totalPages : Number,
    stockAvailable : Boolean,
    tags: [String]
    // isPublished: Boolean,
    // sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
