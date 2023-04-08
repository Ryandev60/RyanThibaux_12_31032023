import axios from 'axios';

const url = 'http://localhost:3000/user';

export const fetchDataHello = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}`);
        return response.data.data.userInfos.firstName;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchDataActivity = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}/activity`);
        const formattedDataActivity = response.data.data.sessions.map(
            (session) => ({
                ...session,
                day: new Date(session.day).getDate(),
            })
        );
        return formattedDataActivity;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchDataAverageSessions = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}/average-sessions`);
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        const formattedDataAverageSessions = response.data.data.sessions.map(
            (session) => {
                const day = days[session.day - 1];
                return {
                    ...session,
                    day: day,
                };
            }
        );
        return formattedDataAverageSessions;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchDataPerformance = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}/performance`);
        const translatedKind = [
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité',
        ];
        const formattedDataPerformance = response.data.data.data.map(
            (data) => ({
                ...data,
                kind: translatedKind[data.kind - 1],
            })
        );
        return formattedDataPerformance;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchDataScore = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}`);
        const maxScore = 100;
        const userScore = response.data.data.todayScore
            ? response.data.data.todayScore
            : response.data.data.score;
        const userScoreToPercent = userScore * 100;

        const formattedDataScore = [
            {
                score: userScoreToPercent,
                fill: '#ff0000',
            },
            {
                score: maxScore,
                display: 'none',
            },
        ];
        return formattedDataScore;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchDataNutritionInfo = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}`);
        const value = response.data.data.keyData;
        const formattedDataNutrition = [
            {
                name: 'Calories',
                value: value.calorieCount,
                img: 'calories.png',
                unit: 'kCal',
            },
            {
                name: 'Protéines',
                value: value.proteinCount,
                img: 'proteins.png',
                unit: 'g',
            },
            {
                name: 'Glucides',
                value: value.carbohydrateCount,
                img: 'carbohydrates.png',
                unit: 'g',
            },
            {
                name: 'Lipides',
                value: value.lipidCount,
                img: 'lipids.png',
                unit: 'g',
            },
        ];
        return formattedDataNutrition;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
