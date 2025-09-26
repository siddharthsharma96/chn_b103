import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import "./../Styles/adminDashboard.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
const AdminDashboard = () => {
  const { products } = useOutletContext();
  const [stats, setStats] = useState({
    totalProducts: 0,
    inStock: 0,
    outOfStock: 0,
    totalValue: 0,
  });
  useEffect(() => {
    const calculateStats = (products) => {
      const totalProducts = products.length;
      const inStock = products.filter((p) => p.inStock).length;
      const outOfStock = totalProducts - inStock;
      const totalValue = products.reduce(
        (acc, p) => acc + p.price * (p.inStock ? 1 : 0),
        0
      );
      return {
        totalProducts,
        inStock,
        outOfStock,
        totalValue,
      };
    };
    const updatedStats = calculateStats(products);
    setStats(updatedStats);
  }, [products]);
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__stats">
          <div className="card product__stats">
            <div className="card__header">
              <span>Total Products</span>
              <Inventory2OutlinedIcon className="c" fontSize="small" />
            </div>
            <div className="card__value">{stats.totalProducts}</div>
          </div>

          <div className="card product__stockss">
            <div className="card__header">
              <span>In Stock</span>
              <TrendingUpIcon fontSize="medium" />
            </div>
            <div className="card__value ">{stats.inStock}</div>
          </div>

          <div className="card products__outSTock">
            <div className="card__header">
              <span>Out of Stock</span>
              <PeopleOutlineOutlinedIcon fontSize="small" />
            </div>
            <div className="card__value ">{stats.outOfStock}</div>
          </div>

          <div className="card products__prices">
            <div className="card__header">
              <span>Total Value</span>
              <AttachMoneyOutlinedIcon className="c" fontSize="small" />
            </div>
            <div className="card__value">₹{stats.totalValue}</div>
          </div>
        </div>

        <div className="dashboard__products">
          <div className="products__header">
            <div>
              <h2>Products</h2>
              <p>Manage your product inventory</p>
            </div>
            <button className="btn btn-primary">+ Add Product</button>
          </div>

          <table className="products__table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <td>
                      <div className="dashboard__product__info">
                        <img
                          className="dashboar__image"
                          alt="asd"
                          src={product.image}
                        />
                        <div>
                          <div className="product__name">{product.name}</div>
                          <div className="product__desc">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{product.category}</td>
                    <td>₹{product.price}</td>
                    <td>
                      <span
                        className={`${
                          product.inStock
                            ? "status in-stock"
                            : "status out-stock"
                        }`}
                      >
                        {product.inStock ? " In stock" : "Out Of stock"}
                      </span>
                    </td>
                    <td>{product.rating}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-icon">
                          <EditNoteOutlinedIcon size={16} />
                        </button>
                        <button className="btn-icon btn-danger">
                          <DeleteOutlineOutlinedIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
