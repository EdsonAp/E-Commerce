import React from 'react';
import { Link } from 'react-router-dom';
import './navbar-styles.scss'
import logo from '../../Assets/logo.png'
console.log(logo)
const Navbar = () =>(
    <div className='navbar'>
        <div className='navbar-item'>
            <Link to='/'>Home</Link>
        </div>
        <div className='navbar-item'>
            <Link to='/shop'>Shop</Link>
        </div>
        <div>
            <Link to='/'>
            <img src={logo} alt='company logo' className='company-logo' />
            </Link>
        </div>
        
        <div className='navbar-item'>
            <Link to='/Register'>Register</Link>
        </div>
    </div>
)

export default Navbar;