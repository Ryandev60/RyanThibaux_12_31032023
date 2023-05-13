import React from 'react';
import PropTypes from 'prop-types';


/**
 * Hello component
 * @description - Component to display the user's first name
 * @param {string} data - User's first name
 * @returns {JSX.Element}
 * */

const Hello = (props) => {
    const firstName = props.data.firstName
    return (
        <div className="welcome">
            <h1>
                Bonjour <span>{firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

Hello.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Hello;