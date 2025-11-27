const express = require("express");
const {
  Adduser,
  Getuser,
  GetuserById,
  Login,
  Deleteusers,
  GetProfile,
  UpdateProfile
} = require("../Controller/Usercontroller");

const router = express.Router();
const authuser = require("../Middleware/Authuser");

//define the routes
router.post("/Adduser", Adduser); //to add a new user
router.get("/Getuser", Getuser); //to get all user details //.get is used to fetch data from db it is a read operation of CRUD and /Getuser give ANY VALUE LIKE /B OR /ANIMAL ETC
router.get("/GetuserById/:uid", GetuserById); //to get user details based on id ./:id is a dynamic parameter it can take any value
router.post("/Login", Login); //to login user
router.delete("/Deleteusers/:uid", Deleteusers); //to delete user based on id
router.get("/GetProfile", authuser, GetProfile); //to get user profile based on token
router.put("/UpdateProfile",authuser, UpdateProfile)

module.exports = router;
