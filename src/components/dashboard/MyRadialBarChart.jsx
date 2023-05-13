import React from 'react';

import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarAngleAxis,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * MyRadialBarChart component
 * @description - Component to display the radial bar chart
 * @param {Object} props - Props
 * @param {Array} props.data - Data
 * @returns {JSX.Element} - MyRadialBarChart component
 * */

const MyRadialBarChart = (props) => {
    const {data} = props;
    return (
        <div className="container-radialbarchart">
            <ResponsiveContainer width={'100%'} height={263}>
                <RadialBarChart
                    barSize={10}
                    innerRadius="70%"
                    outerRadius="90%"
                    data={data}
                    startAngle={200}
                    endAngle={-20}
                    width={258}
                    height={263}
                    className="radialbarchart"
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        label={{
                            fill: '#000000',
                            position: 'center',
                            formatter: (value) => `${value}%`,
                            fontSize: '26px',
                            transform: 'translate(0, -20)',
                        }}
                        clockWise={true}
                        dataKey="score"
                        cornerRadius={10}
                    />

                    <text
                        x={30}
                        y={30}
                        textAnchor="middle"
                        style={{fontSize: '15px'}}
                    >
                        Score
                    </text>

                    <text
                        x={30}
                        y={30}
                        textAnchor="middle"
                        style={{fontSize: '15px'}}
                    >
                        Score
                    </text>
                    <text
                        x="50%"
                        y={140}
                        textAnchor="middle"
                        style={{fontSize: '16px'}}
                    >
                        de votre
                    </text>
                    <text
                        x="50%"
                        y={160}
                        textAnchor="middle"
                        style={{fontSize: '16px'}}
                    >
                        objectif
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

MyRadialBarChart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MyRadialBarChart;
