
//To Use Mongoose in Our Project
const mongoose = require('mongoose');

//Store your Database URL Inside the mongo_url variable
const mongo_url = process.env.MONGO_CONN;

//Connect MongoDB Server and get Response
mongoose.connect(mongo_url)
    .then(() => {
        console.log("MongoDB Connected... ");
    }).catch((err) => {
        console.log("MongoDB Connection Error: ", err);
    })
