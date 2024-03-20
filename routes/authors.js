const express = require('express');
const router = express.Router();




//create endpoint for the author route
router.get('/', (req, res) => {
    res.write('Hello Chef 001!')
    res.end()
}); 
//Read endpoint for the author route
router.post('/', (req, res) => {
    const author = {
        "A Tale Of Two Cities": "Charles Dickens",
        "The Little Prince": "Antoine de Saint-Exupery",
        "Harry potter and the Philosopher's Stone": "J.K Rowling",
        "And Then There Were None": "Agatha Christie",
        "Dream Of The Red Chamber": "Cao Xueqin",
        "The Hobbit": "J. R. R. Tolkien"
    }
    
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(author));
})

//update endpoint for the author route
router.put('/', (req, res) => {
    res.send('Your beans has been updated, Would you like to delete the rest Akara Authors?')
    res.end()
})

//delete endpoint for the author route
router.delete('/', (req, res) => {
    res.send('Akara authors has successfully been deleted!\n Goodbye Chef!')
    res.end()
})


module.exports = router;