import {
    USER_ACTIVITY,
    USER_MAIN_DATA,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from './mock';

export const fetchDataHello = (userId) => {
    const { userInfos } = USER_MAIN_DATA.find(
        (user) => user.id === Number(userId)
    );
    const firstName = userInfos.firstName;

    return firstName;
};

export const fetchDataActivity = (userId) => {
    const { sessions } = USER_ACTIVITY.find(
        (user) => user.userId === Number(userId)
    );

    const formattedDataActivity = sessions.map((session) => ({
        ...session,
        day: new Date(session.day).getDate(),
    }));

    return formattedDataActivity;
};

export const fetchDataAverageSessions = (userId) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

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
};

export const fetchDataPerformance = (userId) => {
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
};

export const fetchDataScore = (userId) => {
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
};

export const fetchDataNutritionInfo = (userId) => {
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
};
