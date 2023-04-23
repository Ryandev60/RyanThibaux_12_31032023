import React, { useState } from 'react';
import NutritionInfo from './NutritionInfo';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

/**
 * NutritionInfosContainer component
 * @description - Component to display the nutrition info
 * @returns {JSX.Element} - NutritionInfosContainer component
 * @param {Object} props - Props
 * @param {Array} props.data - Data
 * */

const NutritionInfosContainer = (props) => {
    const [mapData, setMapData] = useState([]);

    useEffect(() => {
        setMapData(
            props.data.map((item) => {
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
