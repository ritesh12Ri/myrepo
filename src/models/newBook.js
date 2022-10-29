const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId
const newBookSchema = new mongoose.Schema({
    name: String,
    author_Id: {
        type: objectId,
        ref: "newAuthor"
    },
    price: Number,
    retings: Number,
    publisher_Id: {
        type: objectId,
        ref: "newPublisher"
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })
module.exports = mongoose.model("newoneBook", newBookSchema)