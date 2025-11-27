const express = require("express");
const {
  Adduser,
  Getuser,
  GetuserById,
} = require("../Controller/Studentcontroller");
const router = express.Router();

//define the routes
router.post("/Adduser", Adduser); //to add a new user
router.get("/Getuser", Getuser); //to get all user details
router.get("/GetuserById/:uid", GetuserById); //to get user details based on id
module.exports = router;
