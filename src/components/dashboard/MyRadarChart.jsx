import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

const MyRadarChart = (props) => {
    const data = props.data;
    return (
        <div>
            <RadarChart
                outerRadius={90}
                width={730}
                height={250}
                data={data}
                className="radarchart"
            >
                <PolarGrid
                    gridType={'polygon'}
                    radialLines={false}
                    stroke="white"
                />
                <PolarAngleAxis dataKey="kind" stroke="white" />
                <Radar
                    name="radar"
                    dataKey="value"
                    fill="#FF0000"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </div>
    );
};

MyRadarChart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MyRadarChart;
