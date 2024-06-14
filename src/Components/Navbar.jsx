import './Navbar.css';

import Container from "../template/Container.jsx"
const Navbar=()=>{
  return (
    <Container className="navbar-container">
      <div className="logo">
      </div>
      
      <div className="Hammburger">
      </div>

      <div className="Menu">
        <a href="#">HOME</a>
        <a href="#">BOOKS</a>
        <a href="#">ABOUT-US</a>
      </div>
    </Container>
  )
}
export default Navbar;