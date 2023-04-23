import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * MyRadarChart component
 * @description - Component to display the radar chart
 * @returns {JSX.Element} - MyRadarChart component
 * */

const MyRadarChart = (props) => {
    const data = props.data;
    return (
        <div className="radarchart-container">
            <ResponsiveContainer width={'100%'} height={263}>
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
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ fill: 'white', fontSize: 12 }}

                        transform="translate(0, 3)"
                    />
                    <Radar
                        name="radar"
                        dataKey="value"
                        fill="#FF0000"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};



MyRadarChart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MyRadarChart;
