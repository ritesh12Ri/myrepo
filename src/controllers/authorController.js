const NewAuthorModel= require("../models/newAuthorModel")

const createNewAuthor= async function (req, res) {
    let author = req.body
    let authorModel = await NewAuthorModel.create(author)
    res.send({data: authorModel})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createNewAuthor= createNewAuthor
// module.exports.getAuthorsData= getAuthorsData