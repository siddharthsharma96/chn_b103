const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

// middleware to log Api hit time
app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  req.hitTime = time;
  console.log("api hit time", time);
  next();
});

const products = JSON.parse(fs.readFileSync("./Utils/data.json", "utf-8"));

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "succes",
    apiTimeOfHit: req.hitTime,
    length: products.length,
    data: {
      products,
    },
  });
};
const getProduct = (req, res) => {
  //   console.log(req.params);
  const id = req.params.id;

  const product = products.find((el) => el.id === id);

  if (!product) {
    return res.status(404).json({
      status: "Fail",
      apiTimeOfHit: req.hitTime,
      message: `Product with the id ${id} not found `,
    });
  }

  res.status(200).json({
    status: "succes",
    apiTimeOfHit: req.hitTime,
    data: product,
  });
};
const createProduct = (req, res) => {
  console.log(req.body);
  const newId = Number(products[products.length - 1].id) + 1;
  const newProduct = Object.assign({ id: String(newId) }, req.body);

  products.push(newProduct);
  fs.writeFile("./Utils/data.json", JSON.stringify(products), (err) => {
    res.status(201).json({
      status: "Success",
      apiTimeOfHit: req.hitTime,
      data: {
        product: newProduct,
      },
    });
  });
};
const updateProduct = (req, res) => {
  const id = req.params.id;

  const product = products.find((el) => el.id === id);

  if (!product) {
    return res.status(404).json({
      status: "Fail",
      apiTimeOfHit: req.hitTime,
      message: `Product with the id ${id} not found `,
    });
  }
  res.status(200).json({
    status: "Updated",
    apiTimeOfHit: req.hitTime,
    data: {
      product: "<Updated Product Here ...>",
    },
  });
};
const deleteProduct = (req, res) => {
  const id = req.params.id;

  const product = products.find((el) => el.id === id);

  if (!product) {
    return res.status(404).json({
      status: "Fail",
      apiTimeOfHit: req.hitTime,
      message: `Product with the id ${id} not found `,
    });
  }
  res.status(204).json({
    status: "Updated",
    apiTimeOfHit: req.hitTime,
    data: null,
  });
};

// 1. Just to send all the data
app.get("/api/v1/products/", getAllProducts);

// 2. Read only 1 data
app.get("/api/v1/products/:id", getProduct);

// create Product
app.post("/api/v1/products/", createProduct);

// Update the product
app.patch("/api/v1/products/:id", updateProduct);

app.delete("/api/v1/products/:id", deleteProduct);

app.listen(9000, () => {
  console.log("My server started on port no 9000");
});
