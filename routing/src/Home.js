import { useOutletContext } from "react-router-dom";

const Home = () => {
  const a = useOutletContext();
  console.log(a);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
