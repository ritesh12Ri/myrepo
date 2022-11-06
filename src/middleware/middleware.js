const userModel = require("../models/userModel.js")
const mymid1 = async function(req,res,next){
    let userName = req.body.emailId
    let password = req.body.password
    let user = await userModel.findOne({emailId : userName,password : password})
    if(!user)
    return res.send({
        status :false,
        msg : "username or password is not correct"
    }) 
    next()
}

const mymid2  = async function (req,res,next){
    let token =req.headers["x-auth-token"]
    if(!token)
    return res.send({status : false , msg : "token must be prepared"})
    next()
}


module.exports.mymid2 = mymid2
module.exports.mymid1 = mymid1

