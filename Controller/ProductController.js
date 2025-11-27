const Product = require("../Models/ProductModel");

const AddProduct = async (req, res) => {
  try {
    const { pname, pdesc, pprice, pqty, catid } = req.body;
    const UserImage = req.file ? req.file.filename : null;

    const newProduct = new Product({
      pname,
       pdesc,
       pprice,
       pimage: UserImage,
        pqty,
        catid,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product is added", newProduct });
    console.log("✅ Product is added!!");
  } catch (error) {
    res.status(500).json({ message: "server error", error });
    console.log(error);
  }
};


 const Getproduct=async(req,res)=>{
    try {
      const getproduct =await Product.find() //fetchproduct
      res.status(200).json({message:"all Product fetched", getproduct})
     console.log( getproduct)
     
    } catch (error) {
       res.status(500).json({ message: "Server error", error: error.message });
     console.log(error)
    }
 }

//  get product by id
const GetproductById=async(req,res)=>{
    try {
        const {pid}=req.params; //to take id from req or url

        const oneproduct=await Product.findById(pid)//find the id from category model

        if (!oneproduct){  //if category not found
            return(res.status(404).json({message:"product not found"}))
        }
        console.log(oneproduct)
        return(res.status(200).json({message:"product found",oneproduct}))
       

    } catch (error) {
        res.status(500).json({message:"server error",error})
    }

}

//update product

const Updateproduct=async(req,res)=>{
try {
    const { pid } = req.params; //holds the value of id
  const updatedproduct = await Product.findByIdAndUpdate(
      pid,
      {
        product_name: req.body.product_name,
        product_desc: req.body.product_desc,
        product_price: req.body.product_price,
        product_qty: req.body.product_qty,
        categoryId: req.body.categoryId,
      },
      { new: true, runValidators: true } // ensures updated document is returned
    );

  //req.body it holds updated objects (fiels and value sent from client)
  res.status(200).json({message:"Product updated", updatedproduct})
 } catch (error) {
  console.log(error)
 }
}

// delete

const Deleteproduct=async(req,res)=>{
 try {
     const {pid}= req.params;
    const deleteproduct= await Product.findByIdAndDelete(pid);
    res.status(200).json({message:"Product deleted",deleteproduct})

 } catch (error) {
    console.log(error)   
 }
}

module.exports = {AddProduct, Getproduct , GetproductById, Updateproduct, Deleteproduct};