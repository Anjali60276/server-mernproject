const express = require("express");
const upload = require("../Middleware/Upload"); //  lowercase fix
const {
  AddProduct,
  Getproduct,
  GetproductById, // added missing route
  Updateproduct,
  Deleteproduct,
} = require("../Controller/ProductController");

const router = express.Router();

router.post("/AddProduct", upload.single("pimage"), AddProduct); //  field name match
router.get("/Getproduct", Getproduct);
router.get("/GetproductById/:pid", GetproductById); //  missing route
router.put("/Updateproduct/:pid", Updateproduct);
router.delete("/Deleteproduct/:pid", Deleteproduct);

module.exports = router;
