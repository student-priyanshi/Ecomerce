import React,{useContext, useRef, } from 'react'
import './Navbar.css';
import { useState } from 'react';
import logo from '../../Assets/Frontend_Assets/logo.png';
import cart_icon from '../../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContextProvider';
import dropdown_icon from '../../Assets/Frontend_Assets/dropdown_icon.png'

function Navbar() { 
    const[menu, setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef =useRef();

    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');

    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img  src={logo} alt="Logo" />
            <p>SHOPPING</p>
        </div>
        <img className='nav-fropdown' onClick={dropdown_toggle} src={dropdown_icon} alt=""></img>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{TextDecoderation:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{TextDecoderation:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{TextDecoderation:'none'}} to='/women'>Women</Link>{menu==="women"?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{TextDecoderation:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link> 
          <Link to='/cart'><img src={cart_icon} alt="cart_icon"/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;