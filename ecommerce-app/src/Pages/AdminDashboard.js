import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import "./../Styles/adminDashboard.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__stats">
          <div className="card product__stats">
            <div className="card__header">
              <span>Total Products</span>
              <Inventory2OutlinedIcon className="c" fontSize="small" />
            </div>
            <div className="card__value">3</div>
          </div>

          <div className="card product__stockss">
            <div className="card__header">
              <span>In Stock</span>
              <TrendingUpIcon fontSize="medium" />
            </div>
            <div className="card__value ">3</div>
          </div>

          <div className="card products__outSTock">
            <div className="card__header">
              <span>Out of Stock</span>
              <PeopleOutlineOutlinedIcon fontSize="small" />
            </div>
            <div className="card__value ">3</div>
          </div>

          <div className="card products__prices">
            <div className="card__header">
              <span>Total Value</span>
              <AttachMoneyOutlinedIcon className="c" fontSize="small" />
            </div>
            <div className="card__value">₹300</div>
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
              <tr>
                <td>
                  <div className="dashboard__product__info">
                    <img
                      className="dashboar__image"
                      src={
                        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
                      }
                    />
                    <div>
                      <div className="product__name">iPhone 15 Pro</div>
                      <div className="product__desc">
                        iPhone 15 Pro with titanium design aniPhone 15 Pro with
                        titanium design an
                      </div>
                    </div>
                  </div>
                </td>
                <td>Smartphones</td>
                <td>₹34,900</td>
                <td>
                  <span className={"status in-stock"}></span>
                </td>
                <td>4.9</td>
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
              <tr>
                <td>
                  <div className="dashboard__product__info">
                    <img
                      className="dashboar__image"
                      src={
                        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
                      }
                    />
                    <div>
                      <div className="product__name">iPhone 15 Pro</div>
                      <div className="product__desc">
                        iPhone 15 Pro with titanium design aniPhone 15 Pro with
                        titanium design an
                      </div>
                    </div>
                  </div>
                </td>
                <td>Smartphones</td>
                <td>₹34,900</td>
                <td>
                  <span className={"status in-stock"}>In stock</span>
                </td>
                <td>4.9</td>
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
              <tr>
                <td>
                  <div className="dashboard__product__info">
                    <img
                      className="dashboar__image"
                      src={
                        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop"
                      }
                    />
                    <div>
                      <div className="product__name">iPhone 15 Pro</div>
                      <div className="product__desc">
                        iPhone 15 Pro with titanium design aniPhone 15 Pro with
                        titanium design an
                      </div>
                    </div>
                  </div>
                </td>
                <td>Smartphones</td>
                <td>₹34,900</td>
                <td>
                  <span className={"status in-stock"}>In stock</span>
                </td>
                <td>4.9</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
