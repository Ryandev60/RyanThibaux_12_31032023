import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import {
    fetchDataHello,
    fetchDataActivity,
    fetchDataAverageSessions,
    fetchDataPerformance,
    fetchDataScore,
    fetchDataNutritionInfo,
} from '../data/mock/fetchData';
import LeftBar from '../components/dashboard/LeftBar';
import Hello from '../components/dashboard/Hello';
import MyBarChart from '../components/dashboard/MyBarChart';
import MyLineChart from '../components/dashboard/MyLineChart';
import MyRadarChart from '../components/dashboard/MyRadarChart';
import MyRadialBarChart from '../components/dashboard/MyRadialBarChart';
import NutritionInfosContainer from '../components/dashboard/NutritionInfosContainer';

/**
 * Dashboard component
 * @description - Parent component of LeftBar, Hello, MyBarChart, MyLineChart, MyRadarChart, MyRadialBarChart, NutritionInfosContainer
 * @returns {JSX.Element} - Dashboard component
 * */

const Dashboard = () => {
    const [dataHello, setDataHello] = useState();
    const [dataBarChart, setDataBarChart] = useState();
    const [dataLineChart, setDataLineChart] = useState();
    const [dataRadarChart, setDataRadarChart] = useState();
    const [dataRadialBarChart, setDataRadialBarChart] = useState();
    const [dataNutritionInfo, setDataNutritionInfo] = useState();
    const [error, setError] = useState(false);

    const params = useParams();
    const userId = params.userId;

    useEffect(() => {
        const fetchData = async (userId) => {
            try {
                setDataHello(await fetchDataHello(userId));
                setDataBarChart(await fetchDataActivity(userId));
                setDataLineChart(await fetchDataAverageSessions(userId));
                setDataRadarChart(await fetchDataPerformance(userId));
                setDataRadialBarChart(await fetchDataScore(userId));
                setDataNutritionInfo(await fetchDataNutritionInfo(userId));
            } catch {
                setError(true);
            }
        };
        fetchData(userId);
    }, []);

    return (
        <>
            {error ? (
                <Navigate to="/error" />
            ) : (
                <div className="dashboard-container">
                    <LeftBar />
                    <main className="dashboard">
                        {dataHello && <Hello data={dataHello} />}
                        {dataBarChart && <MyBarChart data={dataBarChart} />}
                        {dataLineChart && <MyLineChart data={dataLineChart} />}
                        {dataRadarChart && (
                            <MyRadarChart data={dataRadarChart} />
                        )}
                        {dataRadialBarChart && (
                            <MyRadialBarChart data={dataRadialBarChart} />
                        )}
                        {dataNutritionInfo && (
                            <NutritionInfosContainer data={dataNutritionInfo} />
                        )}
                    </main>
                </div>
            )}
        </>
    );
};

export default Dashboard;
