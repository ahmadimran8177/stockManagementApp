const products = require("../models/productsModel");

const getProductsByField = async (req, res, next) => {
  try {
    const {
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
      brandException,
    } = req.query;

    const newStock = Number(stock);
    const brandRegex = new RegExp(brand);
    const lotRegex = new RegExp(lot);
    const sizeRegex = new RegExp(size);
    const weightRegex = new RegExp(weight);
    const borderRegex = new RegExp(border);
    const colorRegex = new RegExp(color);
    const printRegex = new RegExp(print);
    const conditionRegex = new RegExp(condition);
    const warehouseRegex = new RegExp(warehouse);
    const brandExceptionRegex = new RegExp(brandException, "i");

    const query = {};
    if (stock) {
      query.stock = { $gte: newStock };
    }
    if (brandException) {
      query.$and = [{ brand: { $not: { $regex: brandExceptionRegex } } }];
    }
    if (brand) {
      query.brand = { $regex: brandRegex, $options: "i" };
    }
    if (lot) {
      query.lot = { $regex: lotRegex, $options: "i" };
    }
    if (size) {
      query.size = { $regex: sizeRegex, $options: "i" };
    }
    if (weight) {
      query.weight = { $regex: weightRegex, $options: "i" };
    }
    if (border) {
      query.border = { $regex: borderRegex, $options: "i" };
    }
    if (color) {
      query.color = { $regex: colorRegex, $options: "i" };
    }
    if (print) {
      query.print = { $regex: printRegex, $options: "i" };
    }
    if (condition) {
      query.condition = { $regex: conditionRegex, $options: "i" };
    }
    if (warehouse) {
      query.warehouse = { $regex: warehouseRegex, $options: "i" };
    }

    const fetchedProducts = await products.find(query);
    res.status(200).json({ fetchedProducts });
  } catch (err) {
    next(err);
  }
};

module.exports = getProductsByField;
