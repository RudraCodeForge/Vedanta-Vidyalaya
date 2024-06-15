import "./Hamburger.css";
import { useState } from "react";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div id="Ham" className="Hamburger" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div id="Data" className={menuOpen ? "open" : "Menu"}>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">BOOKS</a>
          </li>
          <li>
            <a href="#">ABOUT-US</a>
          </li>
          <li>
            <a href="#">Upload the book</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
