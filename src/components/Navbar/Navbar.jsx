import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import logo from '../../assets/logo.png.png'
import '../Navbar/Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={logo} alt='' className='logo'/>
    <ul>
        <li>Home</li>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
    </ul>
    <div className="nav-right">
        <select>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <button>Sign up <FaArrowRight /> </button>
    </div>

</div>

  )
}

export default Navbar