import { useOutletContext } from "react-router-dom";

const Button = () => {
  const a = useOutletContext();
  return (
    <div>
      <h1>
        Button page {a.msg} {a.a}
      </h1>
    </div>
  );
};

export default Button;
