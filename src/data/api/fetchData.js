import axios from 'axios';

export const fetchDataHello = async (userId) => {
    const result = await axios
        .get(`http://localhost:3000/user/${userId}`)
        .then((response) => {
            return response.data.data.userInfos.firstName;
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(result);

    return await result;
};

// return response.data.data.userInfos.firstName;
