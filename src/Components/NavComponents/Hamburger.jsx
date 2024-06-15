import "./Hamburger.css";

const Hamburger = () => {
  return (
    <div>
      <div className="Hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="Menu">
        <a href="#">HOME</a>
        <a href="#">BOOKS</a>
        <a href="#">ABOUT-US</a>
      </div>
    </div>
  );
};
export default Hamburger;
