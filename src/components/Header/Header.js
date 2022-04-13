import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/shop" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Shop</NavLink>
                <NavLink to="/orders" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Orders</NavLink>
                <NavLink to="/inventory" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Inventory</NavLink>
                <NavLink to="/about" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>About</NavLink>
                {user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <NavLink to="/login" style={({ isActive }) => isActive ? { color: 'orange' } : { color: 'white' }}>Login</NavLink>
                }
            </div>
        </nav>
    );
};

export default Header;