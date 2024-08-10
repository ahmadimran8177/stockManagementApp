const stockTransactions = require("../models/stockTransactionModel");

async function createNewStockTransaction(req, res, next) {
  try {
    // Extract product details from the request body
    const { title, imageUrl, stockIn, stockOut } = req.body;
    const existingProduct = req.existingProduct;
    const newFinalStock = req.newFinalStock;

    // Edit the product object
    existingProduct.stock = newFinalStock;
    await existingProduct.save();

    // Create a new transaction object
    const newCreatedStockTransaction = await stockTransactions.create({
      title,
      imageUrl,
      stockIn,
      stockOut,
    });

    // Send a success response with the created product
    return res
      .status(201)
      .json({ message: "Stock transaction created successfully" });
  } catch (err) {
    next(err);
  }
}

module.exports = createNewStockTransaction;
