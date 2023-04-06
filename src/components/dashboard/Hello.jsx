import React from 'react';
import PropTypes from 'prop-types';

const Welcome = (props) => {
    const firstName = props.data;
    return (
        <div className="welcome">
            <h1>
                Bonjour <span>{firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

Welcome.propTypes = {
    data: PropTypes.string.isRequired,
};

export default Welcome;
