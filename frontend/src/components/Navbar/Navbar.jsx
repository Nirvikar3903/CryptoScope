import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/photo.png";
import "../Navbar/Navbar.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default : {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={`/`} >
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
      <Link to={`/`} ><li>Home</li></Link>
        <li>Feature</li>
        {/* <li>Pricing</li> */}
        <li>Blog</li>
       <Link to={`/news`}><li>News</li></Link>
       <Link to={`/about`}><li>About</li></Link>
        
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
