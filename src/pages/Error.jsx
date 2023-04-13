import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <h1>Erreur 404</h1>
            <p>La page que vous recherchez n'existe pas</p>
            <NavLink to="/">Retournez à l'accueil</NavLink>
        </div>
    );
};

export default Error;
