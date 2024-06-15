import './Navbar.css';

import Container from "../template/Container.jsx";

import React, { useState } from 'react';

import Logo from './NavComponents/Logo.jsx';

import Hamburger from './NavComponents/Hamburger.jsx';

import Search from './NavComponents/Search.jsx';


const Navbar=()=>{
  return (
    <Container className="navbar-container">
      <Logo />
      <Search />
      <Hamburger />
    </Container>
  )
}
export default Navbar;