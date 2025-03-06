import React, { useState } from 'react';
import './css/Responsivemenu.css';

const Header =()=> {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="header">
            <div className="logo">
                <h1>IT-TECH</h1>
            </div>
            <nav>
                {/*Icon for mobile view*/}
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/*nav links*/}
                <ul className={`nav-links ${isMenuOpen ? 'active' :''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;