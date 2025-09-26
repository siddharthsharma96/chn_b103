import { Navigate, Outlet } from "react-router-dom";
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

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/product.json");
        const data = await response.json();
        setProducts(data);
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
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };
  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    console.log("12121212");

    localStorage.setItem("adminloggedIn", "true");
  };
  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("adminloggedIn");
    localStorage.removeItem("isAdmin");
    Navigate("/");
    toast.error("Logged out");
  };
  const cartItemCount = cartItems.length;
  return (
    <div className="App">
      <Header
        cartItemCount={cartItemCount}
        isAdminLoggedIn={isAdminLoggedIn}
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
          }}
        ></Outlet>
      </main>
    </div>
  );
}

export default App;
