const Students = require("../Models/StudentModel");

const Adduser = async (req, res) => {
  try {
    const { uname, uemail, upassword, uaddress, uphone } = req.body;
    const newuser = new Students({
      name: uname,
      email: uemail,
      password: upassword,
      address: uaddress,
      phone: uphone,
    });
    await newuser.save();
    res.status(201).json({ message: "user Created", user });
    // console.log("User Added!!!!!!!!!!!!!!!!");
  } catch (err) {
    res.status(500).json({ message: "server error", err });
    // console.log(err);
  }
};

const Getuser = async (req, res) => {
  try {
    const allusers = await Students.find(); //fetch all users details from db
    res.status(200).json({ message: "all users fetched", allusers });
    console.log(allusers);
  } catch (error) {
    console.log(error);
  }
};

const GetuserById = async (req, res) => {
  try {
    const { uid } = req.params; //get id from the  url
    const oneuser = await Students.findById(uid); //fetch user details based on id from db
    if (!oneuser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "user found", oneuser });
    console.log(oneuser);
  } catch (error) {
    res.status(500).json({ message: "server error", err });
    console.log(error);
  }
};

module.exports = { Adduser, Getuser, GetuserById };
