const express = require("express");
const app = express();
const dotenv = require("dotenv");
const productRoute = require("./Routes/productRoute");
const authRoute = require("./Routes/authRoute");
const mongoose = require("mongoose");
app.use(express.json());

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware to log Api hit time
app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  req.hitTime = time;
  next();
});

app.use("/api/v1/products", productRoute);
app.use("/api/v1", authRoute);

app.listen(process.env.PORT_NO, () => {
  console.log("My server started on port no", process.env.PORT_NO);
});
