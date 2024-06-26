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
            <a href="#">ABOUT US</a>
          </li>
          
          <li>
            <a href="#">UPLOAD NEW BOOK</a>
          </li>
          
          <li>
            <a href="#">CONTACT US</a>
          </li>
          
          <li>
            <a href="https://www.buymeacoffee.com/Rudra21https://www.buymeacoffee.com/Rudra21">BUY ME CUP OF COFFEE</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
