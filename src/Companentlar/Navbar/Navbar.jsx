import React, { useContext } from 'react'
import { StateContext } from "../../App";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { BsBasketFill } from "react-icons/bs";
function Navbar() {
    const navigate = useNavigate();
    const {savatcha } = useContext(StateContext);  
  return (
    <nav>
      <Link to="/">
      <img src={Logo} alt="logo" />
      </Link>
      <div className="Link">
        <NavLink className="link" to="/">
          {" "}
          Home{" "}
        </NavLink>
        <Link to="basket">
        <BsBasketFill onClick={()=>navigate ("/basket")}className="basket_icon" />
        </Link>
        <sup>{savatcha.length}</sup>
        <NavLink className="link" to="login">
          Login{" "}
        </NavLink>
        <NavLink className="link" to="praduct">
          {" "}
        </NavLink>
        </div>
    </nav>
  )
}

export default Navbar