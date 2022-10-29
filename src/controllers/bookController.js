// const authorModel = require("../models/authorModel")
const bookModel = require("../models/newBook.js")
const NewAuthorModel = require("../models/newAuthorModel")
const NewPublisher = require("../models/newPublisher.js")


const createBook = async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

//////////////////////////////////////////////////////////////////////////////////////////////  
const createBook1 = async function (req, res) {
    let book = req.body
    if (book.author_Id && book.publisher_Id) {
        let resultA = await NewAuthorModel.findOne({ _id: { $eq: book.author_Id } })
        let resultP = await NewPublisher.findOne({ _id: { $eq: book.publisher_Id } })
        if (resultA && resultP) {
            let bookCreated = await bookModel.create(book)
            return res.send({ data: bookCreated })
        } else {
            return res.send({ err: "please enter valid id" })
        }
    } else {
        return res.send({ msg: "this detail is required" })
    }

}
///////////////////////////////////////////////////////////////////////



const getBooksData = async function (req, res) {
    let allBooks = await bookModel.find().populate("author_Id").populate("publisher_Id")
    res.send({ data: allBooks })
}
///////////////////////////////////////////////////////////////////////////////////////////
const updateBooks = async function (req, res) {
    let resultP = await NewPublisher.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 })
    let resuldId = resultP.map(x => x._id)
    let update = await bookModel.updateMany({
        publisher_Id: { $in: resuldId }
    }, { $set: { isHardCover: true } },
    )
    res.send({ msg: update })
}

///////////////////////////////////////////////////////////////////////////////////////////
const updateprice = async function (req, res) {
    let resultP = await NewAuthorModel.find({ retings: { $gt: 3.5 } }).select({ _id: 1 })
    let resuldId = resultP.map(x => x._id)
    let update = await bookModel.updateMany({
        author_Id: { $in: resuldId }
    }, {
        $inc: { price: 10 }
    },)

    res.send({ msg: update })
}

module.exports.createBook = createBook
module.exports.createBook1 = createBook1
module.exports.getBooksData = getBooksData
module.exports.updateBooks = updateBooks
module.exports.updateprice = updateprice
// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }



