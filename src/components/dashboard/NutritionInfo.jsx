import React from 'react';
import PropTypes from 'prop-types';

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
