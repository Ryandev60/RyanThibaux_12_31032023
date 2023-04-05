import React from 'react';
import PropTypes from 'prop-types';

const NutritionInfo = (props) => {
    const data = props.data;
    console.log(data);

    return (
        <div>
            <p>{data.name}</p>
            <p>
                {data.value}
                {data.unit}
            </p>
            <img src={`/images/${data.img}`} alt="" />
        </div>
    );
};

NutritionInfo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NutritionInfo;
