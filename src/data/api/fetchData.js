import axios from 'axios';
import {DataActivity, DataAverageSessions, DataHello, DataPerformance, DataScore, DataNutrition} from "../../models/index.js";
import {extractDay} from "../../utils/utils.js";

const url = 'http://localhost:3000/user';

/**
 * @function fetchDataHello
 * @description Fetch data from api and return the first name of the user with the given ID from the USER_MAIN_DATA array.
 * @param {string} userId - The ID of the user to fetch the first name for.
 * @returns {Promise<string>} A Promise that resolves with the first name of the user as a string.
 * @throws {Error} An error is thrown if no user is found with the given ID.
 * @example
 * fetchDataHello(12).then((firstName) => console.log(firstName));
 * Return "Karl"
 */

export const fetchDataHello = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}`);
        const data = response.data.data.userInfos.firstName;
        return new DataHello(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
};


/**
 * @function fetchDataActivity
 * @description Fetch data from api and return the activity data formatted of the user with the given ID from the USER_ACTIVITY array.
 * @param {string} userId - The ID of the user to fetch the activity data for.
 * @returns {Promise<Array<Object>>} A Promise that resolves with the activity data of the user as an array.
 * @throws {Error} An error is thrown if no user is found with the given ID.
 * @example
 fetchDataActivity(12).then((firstName) => console.log(firstName));
 Returns [{day: 1,kilogram: 80,calories: 240},day: 2,kilogram: 80,calories: 220},...] (array of objects)
 */

export const fetchDataActivity = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}/activity`);
        const formattedDataActivity = response.data.data.sessions.map(
            (session) => (
                new DataActivity(session.calories, session.kilogram, extractDay(session.day)
                )
            ));
        return formattedDataActivity;
    } catch (error) {
        throw error;
    }
};

/**
 * @function fetchDataAverageSessions
 * @description Fetch data from api and return the average sessions data formatted of the user with the given ID from the USER_AVERAGE_SESSIONS array.
 * @param {string} userId - The ID of the user to fetch the average sessions data for.
 * @returns {Promise<Array<Object>>} A Promise that resolves with the average sessions data of the user as an array of objects.
 * @throws {Error} An error is thrown if no user is found with the given ID.
 * @example
 * fetchDataAverageSessions(12).then((firstName) => console.log(firstName));
 * Returns [{day: "L",kilogram: 80,calories: 240},{day: "M",kilogram: 80,calories: 220},...] (array of objects)
 */

export const fetchDataAverageSessions = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}/average-sessions`);
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        const formattedDataAverageSessions = response.data.data.sessions.map(
            (session) => {
                const day = days[session.day - 1];
                return new DataAverageSessions(day, session.sessionLength);
            }
        );
        return formattedDataAverageSessions;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * @function fetchDataPerformance
 * @description Fetch data from api and return the performance data formatted of the user with the given ID from the USER_PERFORMANCE array.
 * @param {string} userId - The ID of the user to fetch the performance data for.
 * @returns {Promise<Array<Object>>} A Promise that resolves with the performance data of the user as an array of objects.
 * @throws {Error} An error is thrown if no user is found with the given ID.
 * @example
 * fetchDataPerformance(12).then((firstName) => console.log(firstName));
 * Returns [{kind: "Cardio",score: 80,fill: "#ff0000"},{kind: "Energie",score: 100,fill: "#ff0000"},...] (array of objects)
 */

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
            (data) => {
                const kind = translatedKind[data.kind - 1];
                return new DataPerformance(kind, data.value,)
            }
        );
        return formattedDataPerformance;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * @function fetchDataScore
 * @description Fetch data from api and return the score data formatted of the user with the given ID from the USER_MAIN_DATA array.
 * @param {string} userId - The ID of the user to fetch the score data for.
 * @returns {Promise<Array<Object>>} A Promise that resolves with the score data of the user as an array of objects.
 * @throws {Error} An error is thrown if no user is found with the given ID.
 * @example
 * fetchDataScore(12).then((firstName) => console.log(firstName));
 * Returns [{score: 80,fill: "#ff0000"},{score: 100,display: "none"}] (array of objects)
 * The first object is the score of the user and the second object is the max score.
 * The score is converted to a percentage.
 * The fill property is used to color the score.
 * The display property is used to hide the max score.
 */

export const fetchDataScore = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}`);
        const userScore = response.data.data.todayScore
            ? response.data.data.todayScore
            : response.data.data.score;
        const userScoreToPercent = userScore * 100;

        const formattedDataScore = [
            new DataScore(userScoreToPercent, '#ff0000')
        ];

        return formattedDataScore
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * @function fetchDataNutritionInfo
 * @description Fetch data from api and return the nutrition info data formatted of the user with the given ID from the USER_MAIN_DATA array.
 * @param {string} userId - The ID of the user to fetch the nutrition info data for.
 * @returns {Promise<Array<Object>>} A Promise that resolves with the nutrition info data of the user as an array of objects.
 * @throws {Error} An error is thrown if no user is found with the given ID.
 * @example
 * fetchDataNutritionInfo(12).then((firstName) => console.log(firstName));
 * Returns [{name: "Calories",value: 240,img: "calories.png",unit: "kCal"},{name: "Protéines",value: 80,img: "proteins.png",unit: "g"},...] (array of objects)
 * The name property is used to display the name.
 * The value property is used to display the value.
 * The img property is used to display the image.
 * The unit property is used to display the unit.
 * */

export const fetchDataNutritionInfo = async (userId) => {
    try {
        const response = await axios.get(`${url}/${userId}`);
        const value = response.data.data.keyData;
        const formattedDataNutrition = [
            new DataNutrition('Calories', value.calorieCount, 'calories.png', 'kCal'),
            new DataNutrition('Protéines', value.proteinCount, 'proteins.png', 'g'),
            new DataNutrition('Glucides', value.carbohydrateCount, 'carbohydrates.png', 'g'),
            new DataNutrition('Lipides', value.lipidCount, 'lipids.png', 'g'),
        ];
        return formattedDataNutrition;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
