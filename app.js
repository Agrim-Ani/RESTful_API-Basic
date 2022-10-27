const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express()
//MIDDLEWARES
app.use(bodyParser.json());
//IMPORT ROUTES
const postRoute = require('./routes/posts');
app.use('/post', postRoute);
//ROUTES 
app.get('/', (req,res) => {
    res.send('we are on home');
});


//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=> console.log("connecteed to db")
    )
//APP LISTEN
app.listen(3000, () => console.log("sever is running on port 3000...."));