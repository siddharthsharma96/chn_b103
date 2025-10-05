const Product = require("./../Models/productModel");

// const fs = require("fs");

// const products = JSON.parse(fs.readFileSync("./Utils/data.json", "utf-8"));

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      apiTimeOfHit: req.hitTime,
      length: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
  // res.status(200).json({
  //   status: "succes",
  //   apiTimeOfHit: req.hitTime,
  //   length: products.length,
  //   data: {
  //     products,
  //   },
  // });
};
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "succes",
      apiTimeOfHit: req.hitTime,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
  // //   console.log(req.params);
  // const id = req.params.id;

  // const product = products.find((el) => el.id === id);

  // if (!product) {
  //   return res.status(404).json({
  //     status: "Fail",
  //     apiTimeOfHit: req.hitTime,
  //     message: `Product with the id ${id} not found `,
  //   });
  // }

  // res.status(200).json({
  //   status: "succes",
  //   apiTimeOfHit: req.hitTime,
  //   data: product,
  // });
};
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "Success",
      apiTimeOfHit: req.hitTime,
      data: {
        newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
  // console.log(req.body);
  // const newId = Number(products[products.length - 1].id) + 1;
  // const newProduct = Object.assign({ id: String(newId) }, req.body);

  // products.push(newProduct);
  // fs.writeFile("./Utils/data.json", JSON.stringify(products), (err) => {
  //   res.status(201).json({
  //     status: "Success",
  //     apiTimeOfHit: req.hitTime,
  //     data: {
  //       product: newProduct,
  //     },
  //   });
  // });
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "Updated",
      apiTimeOfHit: req.hitTime,
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
  // const id = req.params.id;

  // const product = products.find((el) => el.id === id);

  // if (!product) {
  //   return res.status(404).json({
  //     status: "Fail",
  //     apiTimeOfHit: req.hitTime,
  //     message: `Product with the id ${id} not found `,
  //   });
  // }
  // res.status(200).json({
  //   status: "Updated",
  //   apiTimeOfHit: req.hitTime,
  //   data: {
  //     product: "<Updated Product Here ...>",
  //   },
  // });
};
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "Deleted",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
  // const id = req.params.id;

  // const product = products.find((el) => el.id === id);

  // if (!product) {
  //   return res.status(404).json({
  //     status: "Fail",
  //     apiTimeOfHit: req.hitTime,
  //     message: `Product with the id ${id} not found `,
  //   });
  // }
  // res.status(204).json({
  //   status: "Updated",
  //   apiTimeOfHit: req.hitTime,
  //   data: null,
  // });
};
