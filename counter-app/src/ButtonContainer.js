import Button from "./Button";
const ButtonContainer = ({ handleDec, handleInc }) => {
  return (
    <div className="btnCnt">
      <Button txt={"Increment"} func={handleInc} cls={"inc"}></Button>
      <Button txt={"Decrement"} func={handleDec} cls={"dec"}></Button>
    </div>
  );
};

export default ButtonContainer;
