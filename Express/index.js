const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const products = JSON.parse(fs.readFileSync("./Utils/data.json", "utf-8"));

// 1. Just to send all the data
app.get("/api/v1/products/", (req, res) => {
  res.status(200).json({
    status: "succes",
    data: {
      products,
    },
  });
});

// 2. Read only 1 data
app.get("/api/v1/products/:id", (req, res) => {
  //   console.log(req.params);
  const id = req.params.id;

  const product = products.find((el) => el.id === id);

  if (!product) {
    return res.status(404).json({
      status: "Fail",
      message: `Product with the id ${id} not found `,
    });
  }

  res.status(200).json({
    status: "succes",
    data: product,
  });
});

// Create Product
app.post("/api/v1/products/", (req, res) => {
  console.log(req.body);
  const newId = products[products.length];
  console.log(String(newId));
});

app.listen(9000, () => {
  console.log("My server started on port no 9000");
});
