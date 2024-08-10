const mongoose = require("mongoose");

const stockTransactionSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  stockIn: { type: Number, default: 0 },
  stockOut: { type: Number, default: 0 },
});

module.exports = mongoose.model("stockTransactions", stockTransactionSchema);
