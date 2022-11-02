
// const timeAndDate = function(req,res){
//     res.send("My first ever api! for the middleware")
// }
// module.exports.timeAndDate = timeAndDate


function sortLibrary() {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    
    for(let i=0; i<library.length; i++){
    // result.push(library[i].title)
    let array = (library[i].title)
    let result = array.sort()
    
    console.log(result)}
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();