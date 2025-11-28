const bcrypt = require("bcryptjs");
const Users = require("../Models/UserModel");
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET_KEY; // added: minimal necessary secret

const Adduser = async (req, res) => {
  try {
    const { uname, uemail, upassword, uaddress, uphoneno } = req.body;
    const hashpassword =  await bcrypt.hash(upassword,10) // changed: bcryptjs.hash -> bcrypt.hash
    const newuser = new Users({
      name: uname,
      email: uemail,
      password: hashpassword ,
      address: uaddress,
      phone: uphoneno,
    });
    await newuser.save();
    res.status(201).json({ message: "user Created",newuser });
    // console.log("User Added!!!!!!!!!!!!!!!!");
  } catch (err) {
    res.status(500).json({ message: "server error", err });
    // console.log(err);
  }
};

const Getuser = async (req, res) => {
  try {
    const getusers = await Users.find(); //fetch all users details from db
    res.status(200).json({message:"all users fetched", getusers});
   console.log(getusers)
  } catch (error) {
    res.status(500).json({ message: "server error", error });
    console.log(error)
  }
};

const GetuserById = async(req,res) => {
   try {

     const {uid} = req.params;  //get id from the  url 
     const oneuser = await Users.findById(uid); //fetch user details based on id from db
     if(!oneuser){
        return res.status(404).json({message:"User not found"})
     }
     res.status(201).json({message:"user found", oneuser});
     console.log(oneuser)
   } catch (error) {
         res.status(500).json({message:"server error", error});
    console.log(error)
   }
}; 

//to delete users 
const Deleteusers=async(req,res)=>{
    try {
        const {uid}= req.params; 
        const deleteuser=await  Users.findByIdAndDelete(uid);
         res.status(200).json({message:"user deleted",deleteuser})
    } catch (error) {
        console.log(error) 
    }
}


const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const matcheduser=await Users.findOne({
           //model name        //front end name
            email:email,  
         })
         
         const checkpass= await bcrypt.compare(password,matcheduser.password);
         if(!checkpass){
           return res.json({success:false,message:"invalid  credential!!"});
         }
         
         if(!matcheduser)
         {
            res.json({success:false,message:"invalid user"})
         }else{
            const Token=await jwt.sign({id: matcheduser.id}, SECRET)
            console.log(Token)
            res.json({success:true, message:"Login successfully",Token})
         }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"server error"})
    }
}

const GetProfile =  async(req,res)=>{
  try {
    const iduser = req.userId.id; // Extract user ID from the request object
    const user = await Users.findById(iduser)
    if(!user){
      res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user  found!",user})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"server error",error})
    
  }
}

const UpdateProfile = async(req,res) =>{
try{
const iduser = req.userId.id; // Extract user ID from the request object
console.log("iduseriduseriduseriduseriduser",iduser)
    const user = await Users.findById(iduser)
    if(!user){  
      res.status(404).json({message:"user not found"})
    }
    // res.status(200).json({message:"user  found!",user})

    const updateform =({
      name:req.body.uname,
      email:req.body.uemail,
      phone:req.body.uphoneno,
      address:req.body.uaddress
    })

    const updateprofile = await Users.findByIdAndUpdate(iduser,req.body,{new:true})
    res.status(200).json({message:"profile updates successfully",users:updateprofile}) 
}catch(error){
console.log(error)
    res.status(500).json({message:"server error",error})
    
}
}


module.exports = { Adduser, Getuser, GetuserById, Login, Deleteusers, GetProfile, UpdateProfile };
