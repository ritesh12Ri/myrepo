const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
 
 const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
   try{
     let token = req.headers["x-auth-token"]
    if(!token) return res.status(404).send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')
    if(!decodedToken) return res.status(400).send({status: false, msg:"token is not valid"})
    req.decodedToken = decodedToken
    next()
}
 catch(error){
  return res.status(500).send(error.message)
 }
 }
const authorise = async function(req, res, next) {
    // comapre the logged in user's id and the id in request
  try{  let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user){
    return res.status(404).send({
      status: false,
      msg: "username or the password is not corerct",
    })

   }
     next()
}catch (error){
  return res.status(500).send(error.message)
}
}


module.exports.authenticate =authenticate
module.exports.authorise =authorise

