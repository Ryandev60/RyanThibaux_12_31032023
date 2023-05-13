import React from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import { customLegendBarChart, CustomTooltipBarChart } from './Custom';

/**
 * MyBarChart component
 * @description - Component to display the bar chart
 * @returns {JSX.Element} - MyBarChart component
 * @param {Object} props - Props
 * @param {Array} props.data - Data to display
 * */

const MyBarChart = (props) => {
    const data = props.data;
    return (
        <div className="barchart-container">
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width={'100%'} height={250}>
                <BarChart data={data} barGap={8}>
                    <CartesianGrid strokeDasharray="3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        dy={16}
                        tickLine={false}
                        tick={{ fontSize: 14, fontWeight: 500, fill: '#fffff' }}
                    />
                    <YAxis
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        allowDecimals={false}
                        dx={10}
                    />
                    <Tooltip content={<CustomTooltipBarChart />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{ marginTop: '-23px' }}
                        payload={customLegendBarChart}
                    />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        maxBarSize={8}
                        radius={[50, 50, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        maxBarSize={8}
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

//proptypes
MyBarChart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default MyBarChart;
