import { useParams } from "react-router-dom";

const Product = () => {
  const a = useParams();
  console.log(a);

  return (
    <div>
      <h1>Product page {a.id}</h1>
    </div>
  );
};

export default Product;
