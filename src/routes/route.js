const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();


router.get('/missing',function(req,res){
 let array = [1,2,3,4,6,7]
 let n = array.length+1   //expected length of the array n=5+1=6
 let expSum = n*(n+1)/2   //expected sum of the array
 let sumOfArr = 0
 for(let i=0; i<array.length; i++){
    sumOfArr = sumOfArr + array[i]
 }
 let missNo =  expSum - sumOfArr
 console.log(missNo)
 res.send("updated array is" + missNo)

})




router.get('/missing2',function(req,res){
let array = [32,33,34,35,37]
let n = array.length + 1                              // expected length of our array
let expSum = n*(array[0]+array[array.length -1])/2    // expected sum of the array
let sumOfArr = array.reduce((x,y) => x + y)           // current array sum
let miss = expSum - sumOfArr                          // miss no. 36
// console.log(expSum - sumOfArr)
res.send("missing no." + miss)
})


module.exports = router;
// adding this comment for no reason




