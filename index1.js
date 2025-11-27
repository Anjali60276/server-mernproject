
const express = require("express"); //importing express module
const app = express();

const { Welcome, Cat, Dog } = require("./testing"); //importing the function from testing.js file like import in react, require is used in node js
// importing multiple functions from testing.js file
function Hello() {
  console.log("Welcome to node js "); //clg for syntax shortcut for console.log
}

const connectToMongo = require("./db"); //importing the function from db.js file





Hello(); // return Hello function

Welcome();
Cat();
Dog();

const port = 2000;
app.listen (port,()=>{
  console.log('-----------------------------');
  console.log("Server is running on port" + port);
  console.log("Hello");

}) //listen is function provided by the express start the app to run server on specific port
  //App is an object of express module, listen is a method of express module port is a variable
//it tell the app to run the server and ask for https request lkke post get

connectToMongo(); // calling the function to connect to mongoDB































































//{Steps to create backend}
//create server folder> index.js, testing.js>run given below commands in terminal
//node index.js in terminal to run the file
//process for creating backend in terminal
//for backend node index.js
//npm init for install package.json
//(npm i express) installing node module for backend framework
//(npm i mongoose) its syntax for mongodb look in package-lock.json or package.json to see installed packages of express and mongoose
//(npm i nodemon) for auto restart server when changes are made
//(npm i -g nodemon )for global installation of nodemon if its above command not working then use this syntax
//nodemon index.js to run the file with auto restart server when changes are made
//npm start to run the file if u have written "start": "nodemon index.js" in package.json file in scripts object
//folders to be created in server folder
//Model folders for creating schema for mongodb
//Routes folder for creating routes for api for path
//Controllers folder for writing logic for api
//Middleware folder for writing middleware for api and authentication
//db.js file for connecting mongodb with backend because mongodb is database
