const Category = require("../Models/CategoryModel");

const addCategory = async (req, res) => {
  try {
    const { cname, cdescription } = req.body;

    const newCategory = new Category({
      category_name: cname,
      category_description: cdescription,
    });

    await newCategory.save();
    res.status(201).json({ message: "Category Added", newCategory });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

const GetCategory = async (req, res) => {
  try {
    const getcategory = await Category.find();
    // ✅ Fixed for React: returns object key 'getcategory'
    res.status(200).json({ getcategory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const Deletecategory = async (req, res) => {
  try {
    const { cid } = req.params;
    const deletecategory = await Category.findByIdAndDelete(cid);
    res.status(200).json({ message: "category deleted", deletecategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error });
  }
};

const GetCategoryById = async (req, res) => {
  try {
    const { cid } = req.params;
    const onecategory = await Category.findById(cid);
    if (!onecategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category found", onecategory });
    console.log(onecategory);
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

const UpdateCategory = async (req, res) => {
  try {
    const { cid } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(cid, req.body, { new: true });
    res.status(200).json({ message: "category updated", updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
    console.log(error);
  }
};

module.exports = { 
  addCategory, 
  GetCategory,   // ✅ Corrected version
  Deletecategory, 
  GetCategoryById, 
  UpdateCategory 
};
