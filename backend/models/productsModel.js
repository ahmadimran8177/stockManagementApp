const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  stock: { type: Number, required: true },
  brand: { type: String, required: true },
  lot: { type: String, required: true },
  size: { type: String, required: true },
  weight: { type: String, required: true },
  border: { type: String, required: true },
  color: { type: String, required: true },
  print: { type: String, required: true },
  condition: { type: String, required: true },
  warehouse: { type: String, required: true },
  price: { type: Number },
});

module.exports = mongoose.model("products", productsSchema);
