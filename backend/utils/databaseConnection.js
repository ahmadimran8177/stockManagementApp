const mongoose = require("mongoose");
const config = require("config");

const databaseConnection = async () => {
  const connectionUri = config.get("mongodb-connection-uri");
  const serverPort = config.get("server-port");
  await mongoose
    .connect(connectionUri)
    .then(function () {
      console.log(
        `Connected to Database and Server is running on post ${serverPort}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseConnection;
