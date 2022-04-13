import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    let activeStyle = {
        textDecoration: "underline"
    };

    let activeClassName = "underline"


    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/shop" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Shop</NavLink>
                <NavLink to="/orders" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Orders</NavLink>
                <NavLink to="/inventory" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Inventory</NavLink>
                <NavLink to="/about" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>About</NavLink>
                <NavLink to="/login" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;