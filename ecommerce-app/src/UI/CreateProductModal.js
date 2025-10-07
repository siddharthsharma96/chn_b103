import React, { useState } from "react";
import "./../Styles/modal.css"; // Optional styling

const CreateProductModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    rating: 0,
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.price ||
      !formData.category ||
      !formData.image
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onCreate({ ...formData, price: parseFloat(formData.price) });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            name="rating"
            type="number"
            min={0}
            max={5}
            step={0.1}
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
            />
            In Stock
          </label>

          <div className="modal-actions">
            <button type="submit" className="btn-create">
              Create
            </button>
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
