import { Link } from "react-router-dom";

import Container from "./Container";

import logo from "../../img/moeda.png";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <nav className="navbar">
      <Container customClass={"navCustom"}>

        <Link to="/">
          <img src={logo} alt="logo" className="logonav" />
        </Link>

        <i className="bi bi-list" onClick={handleMenu}></i>

        <ul className={`list ${showMenu ? 'show' : 'hide'}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/newproject">New Project</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
