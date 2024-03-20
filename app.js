const express = require('express');
const app = express();
const PORT = 4000;
const LOCALHOST = '127.0.0.1'
const router = require('./routes/authors')


app.use('/authors', router);


const myLogger =(req, res, next) => {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.get('/', (req, res) => {
res.send('Hello Mr. Tobi!');
});



app.listen(PORT, LOCALHOST, () => {
    console.log(`Listening to server at ${LOCALHOST}:${PORT}`)
})

