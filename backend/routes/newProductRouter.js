var express = require("express");
var router = express.Router();
var createNewProduct = require("../controllers/createNewProductFunc");

router.post("/", function (req, res, next) {
  createNewProduct(req, res, next);
});

module.exports = router;
