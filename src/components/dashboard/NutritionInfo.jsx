import React from 'react';
import PropTypes from 'prop-types';

/**
 * NutritionInfo component
 * @description - Component to display the nutrition info
 * @returns {JSX.Element} - NutritionInfo component
 * @param {Object} props - Props
 * @param {Object} props.data - Data
 * */

const NutritionInfo = (props) => {
    const data = props.data;

    return (
        <div className="nutrition-info">
            <img src={`/images/${data.img}`} alt="" />
            <p className="value">
                {data.value}
                {data.unit}
            </p>
            <p className="name">{data.name}</p>
        </div>
    );
};

NutritionInfo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NutritionInfo;
