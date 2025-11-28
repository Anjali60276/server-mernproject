//jwt used for security authentication and authorization
const jwt = require("jsonwebtoken")
const SECRET= process.env.SECRET_KEY  //used to sign and verify jwt token 

const authuser = async (req, res, next) => {   // added async
    try {
        const userToken = req.header("auth-token");   //  await removed (not async)

        if (userToken) {
            const userdata = await jwt.verify(userToken, SECRET);  //  jwt.verify cannot use await
            req.userId = userdata;
            next();
        } else {
            res.json({success:false, message:"Unauthorized token"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"server error"})
    }
}

module.exports = authuser;
