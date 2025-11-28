const mongoose = require("mongoose"); 
require('dotenv').config()


const mongoURL = process.env.URI //database name is crud any name you can give take the url from mongodb compass and if local host is not working use 127.0.0.1
const connectToMongo = async()=>{
    try{
        await mongoose.connect(mongoURL); //await is used to wait for the promise to resolve and async is used to make the function asynchronous or non blocking
        console.log("Connected to mongo successfully");
        console.log("------------------------------")
    }
    catch(error){
        console.log("Error connecting to mongo", error);
    }
}
module.exports = connectToMongo; //exporting the function to use in other files like index.js//exporting the function to use in other files





































//why you sending port number in listen function because port number is like address of your house if you want to visit your friend house you need his address same way if you want to visit your server you need port number there is communication between frontend and backend so backend need to know the address of frontend so that it can send the data to frontend so port number is like address of your server//localhost is like your computer address if you want to visit your friend house you need his address same way if you want to visit your server you need port number there is communication between frontend and backend so backend need to know the address of frontend so that it can send the data to frontend so port number is like address of your server
//localhost is like your computer address if you want to visit your friend house you need his address same way if you want to visit your server you need port number there is communication between frontend and backend so backend need to know the address of frontend so that it can send the data to frontend so port number is like address of your server
//localhost is like your computer address if you want to visit your friend house you need his address same way if you want to visit your server you need port number there is communication between frontend and backend so backend need to know the address of frontend so that it can send the data to frontend so port number is like address of your server