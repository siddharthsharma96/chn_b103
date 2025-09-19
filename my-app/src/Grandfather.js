import Father from "./Father";

const Grandfather = ({ msg }) => {
  return (
    <div className="container">
      <h1>Grandfather Component</h1>
      <p>{msg}</p>
      <Father a={msg}></Father>
    </div>
  );
};

export default Grandfather;
