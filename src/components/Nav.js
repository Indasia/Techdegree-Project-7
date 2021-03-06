import React from 'react';
import { NavLink } from 'react-router-dom';

// navigation links that will show in header
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/angels">Angels</NavLink></li>
                <li><NavLink to="/crystals">Crystals</NavLink></li>
                <li><NavLink to="/unicorns">Unicorns</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;