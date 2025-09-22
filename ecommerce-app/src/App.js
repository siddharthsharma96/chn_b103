import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product.json");
        const data = await response.json();
        setProducts(data);
      } catch (err) {}
    };
    fetchApiData();
  }, []);
  console.log(products);

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
