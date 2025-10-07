import { useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Common/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:9000/api/v1/products");
        const data = await response.json();
        setProducts(data.data.products);
      } catch (err) {
        console.error("Error fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddtoCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      if (existingItem) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item._id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === productId ? { ...item, quantity } : item
        )
      );
    }
  };
  // const handleAdminLoginSuccess = () => {
  //   setIsAdminLoggedIn(true);
  //   localStorage.setItem("adminloggedIn", "true");
  // };
  const handleAdminLoginSuccess = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parseUser = JSON.parse(userData);
        setUserRole(parseUser.role);
      } catch (err) {
        console.log("invalid user");
      }
    }
  };

  const handleCreateProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleUpdateProduct = (id, updates) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      )
    );
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product._id !== id));
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleAdminLogout = () => {
    setUserRole(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    toast.error("Logged out");
  };
  const cartItemCount = cartItems.length;
  return (
    <div className="App">
      <Header
        cartItemCount={cartItemCount}
        isAdminLoggedIn={userRole}
        handleAdminLogout={handleAdminLogout}
      ></Header>
      <main className="as">
        <ToastContainer position="top-right" autoClose={1500}></ToastContainer>
        <Outlet
          context={{
            products,
            loading,
            handleAddtoCart,
            handleRemoveItem,
            handleUpdateQuantity,
            cartItems,
            setCartItems,
            handleAdminLoginSuccess,
            isAdminLoggedIn,
            handleCreateProduct,
            handleDeleteProduct,
            handleUpdateProduct,
          }}
        ></Outlet>
      </main>
    </div>
  );
}

export default App;
