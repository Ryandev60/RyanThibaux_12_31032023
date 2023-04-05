import React, { useState } from 'react';
import NutritionInfo from './NutritionInfo';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const NutritionInfosContainer = (props) => {
    const [data, setData] = useState([]);
    const [mapData, setMapData] = useState([]);

    useEffect(() => {
        setMapData(
            props.data.map((item) => {
                return <NutritionInfo data={item} key={item.name} />;
            })
        );
    }, []);

    return <div>{mapData}</div>;
};

NutritionInfosContainer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default NutritionInfosContainer;
