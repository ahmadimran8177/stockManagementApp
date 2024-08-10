const product = require("../models/productsModel");

const getSingleProduct = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    if (id) {
      const fetchedProduct = await product.findOne({ _id: id });
      res.status(200).json({ fetchedProduct });
    } else {
      throw new Error("Id is not defined");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getSingleProduct;
