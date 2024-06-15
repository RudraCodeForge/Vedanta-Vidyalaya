import "./Hamburger.css";

import {useState} from 'react';


const HamburgerHandler = () => {
  console.log(`message`);
  
};


const Hamburger = () => {
  return (
    <div>
      <div id="Ham" className="Hamburger" onClick={HamburgerHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div id="Data" className="Menu">
        <input className="Search" type="text" placeholder="Search" />
        <a href="#">HOME</a>
        <a href="#">BOOKS</a>
        <a href="#">ABOUT-US</a>
      </div>
    </div>
  );
  
};
export default Hamburger;
