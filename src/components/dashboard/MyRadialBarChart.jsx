import React from 'react';

import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { renderCustomLabel } from './Custom';
import PropTypes from 'prop-types';

const MyRadialBarChart = (props) => {
    const { data } = props;

    return (
        <div className="container-radialbarchart">
            <ResponsiveContainer width={'100%'} height={263}>
                <RadialBarChart
                    innerRadius="70%"
                    outerRadius="90%"
                    data={data}
                    startAngle={200}
                    endAngle={-20}
                    width={258}
                    height={263}
                    className='radialbarchart'
                >
                    <RadialBar
                        minAngle={15}
                        label={{
                            fill: '#000000',
                            position: 'center',
                            formatter: (value) => `${value}%`,
                        }}
                        clockWise={true}
                        dataKey="score"
                        cornerRadius={10}
                    />
                    <text
                        x="50%"
                        y={155}
                        textAnchor="middle"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                        de votre
                    </text>
                    <text
                        x="50%"
                        y={180}
                        textAnchor="middle"
                        style={{ fontSize: '14px', fontWeight: 'bold' }}
                    >
                        objectif
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

//propTypes
MyRadialBarChart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MyRadialBarChart;
