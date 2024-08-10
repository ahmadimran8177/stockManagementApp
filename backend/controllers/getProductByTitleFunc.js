const products = require("../models/productsModel");

const getProductByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;
    if (title) {
      const regex = new RegExp(title);
      const fetchedProducts = await products.find({
        title: { $regex: regex, $options: "i" },
      });
      res.status(200).json({ fetchedProducts });
    } else {
      throw new Error("First enter Title");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getProductByTitle;
