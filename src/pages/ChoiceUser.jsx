import React from 'react';
import { NavLink } from 'react-router-dom';


/**
 * ChoiceUser component
 * @description - Component to choose an example user
 * @returns {JSX.Element} - ChoiceUser component
 * */

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
