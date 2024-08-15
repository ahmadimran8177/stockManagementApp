const products = require("../models/productsModel");
const stockTransactions = require("../models/stockTransactionModel");
const debug = require("../debuggers/customDebugger");

async function createNewProduct(req, res, next) {
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
  function capitalizeAndTrim(str) {
    // Trim the string to remove leading and trailing whitespace
    const trimmedStr = str.trim();

    // Capitalize the first letter and concatenate with the rest of the string
    return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1);
  }
  try {
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
      // debug(req.body);
      throw new Error("Fill the missing fields");
    } else {
      const modifiedBrand = capitalizeAndTrim(brand);
      const modifiedLot = capitalizeAndTrim(lot);
      const modifiedSize = capitalizeAndTrim(size);
      const modifiedCondition = capitalizeAndTrim(condition);
      const modifiedColor = capitalizeAndTrim(color);
      const modifiedPrint = capitalizeAndTrim(print);
      const modifiedWeight = capitalizeAndTrim(weight);
      const modifiedBorder = capitalizeAndTrim(border);
      const modifiedWarehouse = capitalizeAndTrim(warehouse);
      const modifiedImgUrl = capitalizeAndTrim(imageUrl);
      const modifiedStock = Number(stock);

      const title = `${modifiedBrand} ${modifiedLot} ${modifiedSize} Condition ${modifiedCondition} Colour ${modifiedColor} ${modifiedPrint} Print ${modifiedWeight} Bag Weight Border ${modifiedBorder} Location ${modifiedWarehouse} Store`;

      // Check the product title exist in DB or not
      const existingProduct = await products.findOne({ title });
      if (existingProduct) {
        throw new Error("Product already existed");
      } else {
        // Create a new product object
        const newCreatedProduct = await products.create({
          title,
          imageUrl: modifiedImgUrl,
          stock: modifiedStock,
          brand: modifiedBrand,
          lot: modifiedLot,
          size: modifiedSize,
          weight: modifiedWeight,
          border: modifiedBorder,
          color: modifiedColor,
          print: modifiedPrint,
          condition: modifiedCondition,
          warehouse: modifiedWarehouse,
        });

        // Create a new transaction object
        const newCreatedStockTransaction = await stockTransactions.create({
          title,
          imageUrl: modifiedImgUrl,
          stockIn: modifiedStock,
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
