const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middle = require("../middleware/middleware.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", middle.mymid1,userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middle.mymid2, userController.getUserData)

router.put("/users/:userId", middle.mymid2, userController.updateUser)

router.delete("/users/:userId", middle.mymid2, userController.deleteUser)

module.exports = router;