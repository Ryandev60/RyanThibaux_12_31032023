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

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}kg`}</p>
                <p className="label">{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
};
