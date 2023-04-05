export const customLegendBarChart = [
    {
        value: 'Poids (kg)',
        id: 'kilogram',
        color: '#282D30',
    },
    {
        value: 'Calories brûlées (kCal)',
        id: 'calories',
        color: '#E60000',
    },
];

export const CustomTooltipBarChart = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-barchart">
                <p className="label">{`${payload[0].value}kg`}</p>
                <p className="label">{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
};
export const CustomTooltipLineChart = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="custom-tooltip-linechart">
                <p className="value">{` ${data.sessionLength} min`}</p>
            </div>
        );
    }
};

export const renderCustomLabel = () => {
    return (
        <g>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: '20px', fontWeight: 'bold' }}
            ></text>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: '14px' }}
            ></text>
        </g>
    );
};
