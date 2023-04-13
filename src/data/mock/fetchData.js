import {
    USER_ACTIVITY,
    USER_MAIN_DATA,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from './mock';

export const fetchDataHello = (userId) => {
    try {
        const { userInfos } = USER_MAIN_DATA.find(
            (user) => user.id === Number(userId)
        );
        const firstName = userInfos.firstName;

        return firstName;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const fetchDataActivity = (userId) => {
    try {
        const { sessions } = USER_ACTIVITY.find(
            (user) => user.userId === Number(userId)
        );

        const formattedDataActivity = sessions.map((session) => ({
            ...session,
            day: new Date(session.day).getDate(),
        }));

        return formattedDataActivity;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const fetchDataAverageSessions = (userId) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    try {
        const { sessions } = USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === Number(userId)
        );

        const formattedDataAverageSessions = sessions.map((session) => {
            const day = days[session.day - 1];
            return {
                ...session,
                day: day,
            };
        });

        return formattedDataAverageSessions;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const fetchDataPerformance = (userId) => {
    try {
        const { data } = USER_PERFORMANCE.find(
            (user) => user.userId === Number(userId)
        );

        const translatedKind = [
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité',
        ];

        const formattedDataPerformance = data.map((data) => {
            return {
                ...data,
                kind: translatedKind[data.kind - 1],
            };
        });

        return formattedDataPerformance;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const fetchDataScore = (userId) => {
    try {
        const { todayScore, score } = USER_MAIN_DATA.find(
            (user) => user.id === Number(userId)
        );

        const maxScore = 100;

        const userScore = todayScore ? todayScore : score;
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
        console.log(error);
        throw error
    }
};

export const fetchDataNutritionInfo = (userId) => {
    try {
        const { keyData } = USER_MAIN_DATA.find(
            (user) => user.id === Number(userId)
        );
        const formattedDataNutrition = [
            {
                name: 'Calories',
                value: keyData.calorieCount,
                img: 'calories.png',
                unit: 'kCal',
            },
            {
                name: 'Protéines',
                value: keyData.proteinCount,
                img: 'proteins.png',
                unit: 'g',
            },
            {
                name: 'Glucides',
                value: keyData.carbohydrateCount,
                img: 'carbohydrates.png',
                unit: 'g',
            },
            {
                name: 'Lipides',
                value: keyData.lipidCount,
                img: 'lipids.png',
                unit: 'g',
            },
        ];
        return formattedDataNutrition;
    } catch (error) {
        console.log(error);
        throw error
    }
};
