const products = require("../models/productsModel");

const stockCheckRelativeToOutStock = async (req, res, next) => {
  try {
    // Extract product details from the request body
    const { title, imageUrl, stockIn, stockOut } = req.body;

    // Validate required fields (optional, but recommended)
    if (!title || !imageUrl || !stockIn || !stockOut) {
      throw new Error("Fill the missing fields");
    } else {
      // Check the product title exist in DB or not
      const existingProduct = await products.findOne({ title });
      if (!existingProduct) {
        throw new Error("Product do not exist");
      } else {
        const existingStock = Number(existingProduct?.stock);
        const outStock = Number(stockOut);
        const inStock = Number(stockIn);
        const newInStock = existingStock + inStock;

        // Check that you have enough stock to give out
        if (newInStock < outStock) {
          throw new Error("You do not have enough stock to give out");
        } else {
          const newFinalStock = newInStock - outStock;
          req.newFinalStock = newFinalStock;
          req.existingProduct = existingProduct;

          next();
        }
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = stockCheckRelativeToOutStock;
