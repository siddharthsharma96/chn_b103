import GrandSon from "./GrandSon";

const Son = ({ msg }) => {
  return (
    <div className="container">
      <h1>Son Component</h1>
      <p>{msg}</p>

      <GrandSon blessing={msg}></GrandSon>
    </div>
  );
};

export default Son;
