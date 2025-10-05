const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
      minlength: [3, "Product must have atleast 3 characters"],
      maxlength: [20, "Product must not be greater than 20 characters"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      max: [9999999, "Price must not be greater than this value"],
      min: [1000, "Price must not be less than this value"],
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Smartphones",
        "Audio",
        "Tablets",
        "Laptops",
        "Wearables",
        "Cameras",
      ],
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Rating must not be less than 1"],
      max: [5, "Rating must not be greater than 5"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
