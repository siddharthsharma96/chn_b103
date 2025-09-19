import Son from "./Son";

const Father = (props) => {
  return (
    <div className="container">
      <h1>Father Component</h1>
      <p>{props.a}</p>

      <Son msg={props.a}></Son>
    </div>
  );
};

export default Father;
