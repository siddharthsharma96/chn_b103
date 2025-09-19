import "./App.css";
import Grandfather from "./Grandfather";
// import Component1 from "./Component1";
// import Comp2, { AA } from "./Comp2";
// import { Comp3 } from "./Comp3";

function App() {
  let msg = "You are my grandson";
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>Start creating React </h2>
      <h3>Seeing Props Drilling</h3>
      <Grandfather msg={msg}></Grandfather>
      {/* <Component1 b={msg}></Component1> */}

      {/* <Comp2 a={msg} b={32}></Comp2>
      <Comp3></Comp3>
      <AA></AA> */}
    </div>
  );
}

export default App;
