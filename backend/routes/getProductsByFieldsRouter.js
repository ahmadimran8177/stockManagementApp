var express = require("express");
var router = express.Router();
var getProductsByField = require("../controllers/getProductsByFieldFunc");

router.get("/", function (req, res, next) {
  getProductsByField(req, res, next);
});

module.exports = router;
