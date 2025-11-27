const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pname: { type: String, required: true },         // matches product.pname
  pdesc: { type: String, required: true },         // matches product.pdesc
  pprice: { type: Number, required: true },        // matches product.pprice
  pimage: { type: String, required: false },       // matches product.pimage
  pqty: { type: Number, required: true },          // matches product.pqty
  catid: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false }, // matches product.catid
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
