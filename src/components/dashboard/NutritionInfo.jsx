import React from 'react';
import PropTypes from 'prop-types';

const NutritionInfo = (props) => {
    const data = props.data;
    console.log(data);

    return (
        <div className='nutrition-info'>
            <p className='value'>
                {data.value}
                {data.unit}
            </p>
            <p className='name'>{data.name}</p>
            <img src={`/images/${data.img}`} alt="" />
        </div>
    );
};

NutritionInfo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NutritionInfo;
