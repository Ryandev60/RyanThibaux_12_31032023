import React from 'react';
import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { CustomTooltipBarChart, CustomTooltipLineChart } from './Custom';
import PropTypes from 'prop-types';
const MyLineChart = (props) => {
    const data = props.data;
    return (
        <div className="linechart-container">
            <h2 className="linechart-title">
                Durée moyenne des <br /> sessions
            </h2>
            <ResponsiveContainer width={'100%'} height={263}>
                <LineChart
                    width={258}
                    height={263}
                    data={data}
                    margin={{ top: 5, right: 14, left: 14, bottom: 5 }}
                    style={{ background: '#ff0000' }}
                    yAxis={{ domain: [0, 100000] }}
                >
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        stroke="#ffffff80"
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                        padding={{ left: 0, right: 0 }} 
                        tickMargin={10}
                    />
                    <YAxis domain={[0, 'dataMax + 50']} hide={true} />
                    <Tooltip content={<CustomTooltipLineChart />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="white"
                        dot={false}
                        activeDot={{
                            stroke: 'white',
                            strokeWidth: 5,
                            r: 5,
                        }}
                    />
                    <Line
                        type="monotone"
                        dot={false}
                        dataKey="sessionLength"
                        stroke="none"
                        hidden={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

//proptypes
MyLineChart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MyLineChart;
