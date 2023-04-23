import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Header component
 * @description - Component to display the header
 * @returns {JSX.Element} - Header component
 * */

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img src="../images/logo.png" alt="" /> SportSee
                    </li>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>

                    <li>
                        <NavLink to="/">Profil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Réglage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Communauté</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
