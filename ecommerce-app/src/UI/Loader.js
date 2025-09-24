import "./../Styles/loader.css";
const Loader = ({ fullPage = false }) => {
  return (
    <div className={`loader-container ${fullPage ? "fullpage" : ""}`}>
      <div className="spinner" />
    </div>
  );
};

export default Loader;
