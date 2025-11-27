const express = require("express");
const {
addCategory,
GetCategory,
GetCategoryById,
Deletecategory,
UpdateCategory,
} = require("../Controller/Categorycontroller");


const router = express.Router();


//define the routes
router.post("/addCategory", addCategory);
router.get("/GetCategory", GetCategory);
router.get("/GetCategoryById/:cid", GetCategoryById);
router.delete("/Deletecategory/:cid", Deletecategory);
router.put("/UpdateCategory/:cid", UpdateCategory);


module.exports = router;