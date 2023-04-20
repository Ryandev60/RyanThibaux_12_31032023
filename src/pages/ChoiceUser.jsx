import React from 'react';
import { NavLink } from 'react-router-dom';


const ChoiceUser = () => {
    return (
        <div className="choiceuser">
            <h1>Choisir un exemple d'utilisateur :</h1>
            <div className="choiceuser-buttons">
                <NavLink to="/dashboard/12">Karl</NavLink>
                <NavLink to="/dashboard/18">Cécilia</NavLink>
            </div>
        </div>
    );
};

export default ChoiceUser;
