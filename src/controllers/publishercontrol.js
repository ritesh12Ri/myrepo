const NewPublisher = require("../models/newPublisher.js")

const createPublisher = async function (req, res) {
    let Publisher = req.body
    let PublisherModel = await NewPublisher.create(Publisher)
    res.send({ data: PublisherModel })
}
module.exports.createPublisher = createPublisher


















//////////////////////////////////////////////////////////////


// const Publisher = ("../models/newPublisher.js")

// const createPublisher = async function(req,res){
//     let publisher = req.body
//     let publisherModel = await Publisher.create(publisher)
//     res.send({ msg : publisherModel})
// }
// module.exports.createPublisher = createPublisher