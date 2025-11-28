// 1
const express = require("express");
require('dotenv').config()
//2

const app = express();

const cors = require("cors");
// cross origin resource sharing
app.use(cors());
// app.use(cors("http://localhost:4000"));
app.use(express.json()); // 
//3
const connectToMongo = require("./db");
connectToMongo();

//4
const PORTNO = process.env.PORT  ;
app.listen(PORTNO, () => {
  console.log("Server is running on portnumber:" + PORTNO);
});

//5
app.get("/api", (req, res /* inside the parameter name is req,res */) => {
  res.send("Hello Postman");
});
//inside app.get() create an arrow function

app.get("/api3", (req, res) => {
  res.send("Hello how are you?");
});

app.use("/api/user", require("./Routes/Userroute"));
app.use("/api/Studentuser", require("./Routes/Studentroute"));
app.use("/api/category", require("./Routes/Categoryroute"));
app.use("/api/product", require("./Routes/Productroute"));
app.use("/api/image/", express.static("./Uploads"));

//go to postman add the new https request
//create a collection
//set the method to get
//enter the url http://localhost:7000/api
//click on send button
//you will see the response "Hello Postman" in postman
