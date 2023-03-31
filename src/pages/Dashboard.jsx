import React, { useEffect, useState } from 'react';
import MyBarChart from '../components/dashboard/MyBarChart';
import LeftBar from '../components/dashboard/LeftBar';
import Header from '../components/layout/Header';
import {
    fetchDataActivity,
    fetchDataAverageSessions,
} from '../api/mock/formatData';
import { useParams } from 'react-router';
import MyLineChart from '../components/dashboard/MyLineChart';

const Dashboard = () => {
    const [dataActivity, setDataActivity] = useState();
    const [dataAverageSessions, setDataAverageSessions] = useState();
    const params = useParams();

    useEffect(() => {
        const fetchData = () => {
            setDataActivity(fetchDataActivity(params.userId));
            setDataAverageSessions(fetchDataAverageSessions(params.userId));
        };
        fetchData();
    }, [params.userId]);

    return (
        <div>
            <Header />
            <LeftBar />
            <main>
                <MyBarChart data={dataActivity} />
                <MyLineChart data={dataAverageSessions} />
            </main>
        </div>
    );
};

export default Dashboard;
