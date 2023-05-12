import React, { useState, useEffect } from 'react';
import NutritionInfo from './NutritionInfo';
import PropTypes from 'prop-types';

/**
 * NutritionInfosContainer component
 * @description - Component to display the nutrition info
 * @returns {JSX.Element} - NutritionInfosContainer component
 * @param {Object} props - Props
 * @param {Array} props.data - Data
 * */

const NutritionInfosContainer = (props) => {
    const data = props.data;
    const [mapData, setMapData] = useState([]);

    useEffect(() => {
        setMapData(
            data.map((item) => {
                return <NutritionInfo data={item} key={item.name} />;
            })
        );
    }, []);

    return <div className='nutrition-container '>{mapData}</div>;
};

NutritionInfosContainer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default NutritionInfosContainer;
