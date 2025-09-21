import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  let msg = "hello";
  let as = 90;
  return (
    <div className="App">
      <Header></Header>
      <Outlet context={{ msg, as }}></Outlet>
    </div>
  );
}

export default App;
