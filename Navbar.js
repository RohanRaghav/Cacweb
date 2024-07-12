import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src='/LOGO-SVGwhite.png' alt='logo' className='logo' />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutus">About us</a></li>
                <li><a href="#acheivers">Acheivers</a></li>
                <li><a href="#events">Events</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
