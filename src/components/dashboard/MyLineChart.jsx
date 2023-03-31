import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = (props) => {
    const data = props.data
    console.log(data);
    return (
        <div>
            <LineChart
                width={258}
                height={263}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                style={{ background: '#ff0000' }}
                yAxis={{ domain: [0, 100000] }}
            >
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    stroke="white"
                    tick={{
                        fontSize: 12,
                        fontWeight: 500,
                    }}
                />
                <YAxis domain={[0, 'dataMax + 50']} hide={true} />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                    dot={false}
                    activeDot={{
                        stroke: 'white',
                        strokeWidth: 8,
                        r: 8,
                    }}
                />
            </LineChart>
        </div>
    );
};

export default MyLineChart;
