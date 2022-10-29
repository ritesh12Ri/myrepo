const mongoose = require("mongoose")
const newAuthorSchema = new mongoose.Schema({
    authoreName: String,
    age: String,
    address: String,
    rating: Number
}, { timestamps: true })

module.exports = mongoose.model("newAuthor", newAuthorSchema)