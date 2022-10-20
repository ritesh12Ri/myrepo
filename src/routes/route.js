const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();


// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

// WRITE A POST API TO THE ABOVE


// take this as sample for array of persons:

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post('/hit-me', function (req, res) {
    let votingAge = req.query.age     // 20
    // console.log(votingAge)

    let validPersons = persons.filter(x => (x.age >= votingAge))

    validPersons.map(x => x.votingStatus = true)

    res.send({ person: validPersons })
})

module.exports = router;



















// for(let i=0; i<persons.length; i++){
    //     let newPerson = []
    //     if(persons[i].age<votingAge){
    //         newPerson.push(persons[i])
    //       return res.send("new person is" + newPerson)
    //     }else{
    //        return res.send({"message" : "bade ho jao jaldi"})
    //     }
    // }
    
