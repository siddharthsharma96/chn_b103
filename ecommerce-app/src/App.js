import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Common/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="App">
      <Header></Header>
      <main className="as">
        <Outlet context={{ products, loading }}></Outlet>
      </main>
    </div>
  );
}

export default App;
