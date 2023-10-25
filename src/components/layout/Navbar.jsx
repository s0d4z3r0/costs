import { Link } from "react-router-dom";

import Container from "./Container";

import logo from "../../img/moeda.png";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
    }

  return (
    <nav className="navbar">
      <Container customClass={"navCustom"}>

        <Link to="/">
          <img src={logo} alt="logo" className="logonav" />
        </Link>

        <i className="bi bi-list" onClick={handleMenu}></i>

        <ul className={`list ${showMenu ? 'show' : 'hide'}`}>
          <li onClick={handleCloseMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/company">Company</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={handleCloseMenu}>
            <Link to="/newproject">New Project</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
