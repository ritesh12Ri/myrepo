const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


const BookModel= require("../models/bookModel.js")
const Bookcontroller= require("../controllers/bookcontroller.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", Bookcontroller.createBook)

router.get("/getBooksData", Bookcontroller.getBooksData)

module.exports = router;