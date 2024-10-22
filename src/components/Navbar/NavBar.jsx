import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="/">NASA APOD</a>
                </div>
                <ul className="navbar-links">
                    <li>
                        <a href="https://github.com/nasa/apod-api">Documentation</a>
                    </li>
                    <li>
                        <div className="navbar-item">
                            <span>Dev by Raína</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
