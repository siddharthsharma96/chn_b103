import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  const [a, setA] = useState(0);
  const handleInc = () => {
    setA(a + 1);
  };
  const handleDec = () => {
    setA(a - 1);
  };

  //1.callback function
  // 2.array of dependencies(states variables)
  // 1. Array EMpty: it will run only one time
  // 2. With some dependencies= Calbback function will run will run evry whenver depencies change
  // 3.Without array of dependencies
  useEffect(() => {
    if (a < 0) {
      setTimeout(() => {
        setA(0);
      }, 2000);
    }
  }, [a]);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter a={a} handleDec={handleDec} handleInc={handleInc}></Counter>
    </div>
  );
}

export default App;
