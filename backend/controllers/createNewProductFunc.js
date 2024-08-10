const products = require("../models/productsModel");
const stockTransactions = require("../models/stockTransactionModel");

async function createNewProduct(req, res, next) {
  try {
    // Extract product details from the request body
    const {
      imageUrl,
      stock,
      brand,
      lot,
      size,
      weight,
      border,
      color,
      print,
      condition,
      warehouse,
    } = req.body;

    // Validate required fields (optional, but recommended)
    if (
      !imageUrl ||
      !stock ||
      !brand ||
      !lot ||
      !size ||
      !weight ||
      !border ||
      !color ||
      !print ||
      !condition ||
      !warehouse
    ) {
      throw new Error("Fill the missing fields");
    } else {
      const title = `${brand} ${lot} ${size} ${condition} ${color} ${print} ${weight} ${border} Border ${warehouse} Warehouse`;

      // Check the product title exist in DB or not
      const existingProduct = await products.findOne({ title });
      if (existingProduct) {
        throw new Error("Product already existed");
      } else {
        // Create a new product object
        const newCreatedProduct = await products.create({
          title,
          imageUrl,
          stock,
          brand,
          lot,
          size,
          weight,
          border,
          color,
          print,
          condition,
          warehouse,
        });

        // Create a new transaction object
        const newCreatedStockTransaction = await stockTransactions.create({
          title,
          imageUrl,
          stockIn: stock,
        });

        // Send a success response with the created product
        return res
          .status(201)
          .json({ message: "New product created successfully" });
      }
    }
  } catch (err) {
    next(err);
  }
}

module.exports = createNewProduct;
