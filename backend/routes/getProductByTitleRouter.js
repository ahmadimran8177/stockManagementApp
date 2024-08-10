var express = require("express");
var router = express.Router();
var getProductByTitle = require("../controllers/getProductByTitleFunc");

router.get("/", function (req, res, next) {
  getProductByTitle(req, res, next);
});

module.exports = router;
