const Comp2 = ({ a, b }) => {
  console.log(a, b);

  return (
    // react Fragments
    <>
      <h1>Hello from Comp2</h1>
      <h2>Hi its i multi line component</h2>
      <h1>
        value of a :{a}
        value of b: {b}
      </h1>
    </>
  );
};

export default Comp2;

export const AA = () => {
  return <h1>Hello AAA</h1>;
};
