import ButtonContainer from "./ButtonContainer";

const Counter = ({ a, handleDec, handleInc }) => {
  return (
    <div className="Counter">
      <p>{a}</p>
      <ButtonContainer
        handleDec={handleDec}
        handleInc={handleInc}
      ></ButtonContainer>
    </div>
  );
};

export default Counter;
