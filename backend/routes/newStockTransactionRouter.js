var express = require("express");
var router = express.Router();
var createNewStockTransaction = require("../controllers/createNewStockTransactionFunc");
var stockCheckRelativeToOutStock = require("../middlewares/stockCheck");

router.post("/", stockCheckRelativeToOutStock, function (req, res, next) {
  createNewStockTransaction(req, res, next);
});

module.exports = router;
