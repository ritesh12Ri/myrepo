const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publishercontrol")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createBook", bookController.createBook)
router.post("/createNewAuthor", authorController.createNewAuthor)
router.post("/createPublisher", publisherController.createPublisher)


router.get("/getBooksData", bookController.getBooksData)
router.post("/createBook1", bookController.createBook1)
router.put("/updateBooks", bookController.updateBooks)
// router.post("/updateBooks", bookController.updateBooks)
router.put("/updateprice", bookController.updateprice)



module.exports = router;