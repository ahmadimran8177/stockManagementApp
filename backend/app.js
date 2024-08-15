var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var logger = require("morgan");
var config = require("config");
var databaseConnection = require("./utils/databaseConnection");
require("dotenv").config();
var origin = `${config.get("client-url")}`;

var productRouter = require("./routes/newProductRouter");
var stockTransactionRouter = require("./routes/newStockTransactionRouter");
var getProductsByTitleRouter = require("./routes/getProductByTitleRouter");
var getProductsByFieldRouter = require("./routes/getProductsByFieldsRouter");
const getSingleProduct = require("./controllers/getSingleProductFunc");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin, credentials: true }));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

databaseConnection();

app.use("/",function(req,res,next){
  res.send("Server is running")
})
app.use("/api/create_new_product", productRouter);
app.use("/api/create_new_stock_transaction", stockTransactionRouter);
app.use("/api/get_products_by_title", getProductsByTitleRouter);
app.use("/api/get_products_by_field", getProductsByFieldRouter);
app.use("/api/get_products/:id", function (req, res, next) {
  getSingleProduct(req, res, next);
});

module.exports = app;
