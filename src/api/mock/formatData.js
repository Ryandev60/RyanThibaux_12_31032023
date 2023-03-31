import {
    USER_ACTIVITY,
    USER_MAIN_DATA,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from './mock';

export const fetchDataActivity = (userId) => {
    const { sessions } = USER_ACTIVITY.find(
        (user) => user.userId === Number(userId)
    );

    const formattedSessions = sessions.map((session) => ({
        ...session,
        day: new Date(session.day).getDate(),
    }));

    return formattedSessions;
};

export const fetchDataAverageSessions = (userId) => {
    const { sessions } = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === Number(userId)
    );

    const formattedSessions = { sessions };

    return formattedSessions.sessions;
};
