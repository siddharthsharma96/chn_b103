const fs = require("fs");

const products = JSON.parse(fs.readFileSync("./Utils/data.json", "utf-8"));

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "succes",
    apiTimeOfHit: req.hitTime,
    length: products.length,
    data: {
      products,
    },
  });
};
exports.getProduct = (req, res) => {
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
exports.createProduct = (req, res) => {
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
exports.updateProduct = (req, res) => {
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
exports.deleteProduct = (req, res) => {
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
