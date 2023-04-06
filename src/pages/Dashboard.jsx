import React, { useEffect, useState } from 'react';
import MyBarChart from '../components/dashboard/MyBarChart';
import LeftBar from '../components/dashboard/LeftBar';
import {
    fetchDataActivity,
    fetchDataAverageSessions,
    fetchDataPerformance,
    fetchDataScore,
    fetchDataNutritionInfo,
    fetchDataHello,
} from '../data/mock/fetchData';
import { useParams } from 'react-router';
import MyLineChart from '../components/dashboard/MyLineChart';
import MyRadarChart from '../components/dashboard/MyRadarChart';
import MyRadialBarChart from '../components/dashboard/MyRadialBarChart';
import NutritionInfosContainer from '../components/dashboard/NutritionInfosContainer';
import Hello from '../components/dashboard/Hello';

const Dashboard = () => {

    const [dataHello, setDataHello] = useState();
    const [dataBarChart, setDataBarChart] = useState();
    const [dataLineChart, setDataLineChart] = useState();
    const [dataRadarChart, setDataRadarChart] = useState();
    const [dataRadialBarChart, setDataRadialBarChart] = useState();
    const [dataNutritionInfo, setDataNutritionInfo] = useState();

    const params = useParams();


    useEffect(() => {
        const fetchData = (userId) => {
            setDataHello(fetchDataHello(userId));
            setDataBarChart(fetchDataActivity(userId));
            setDataLineChart(fetchDataAverageSessions(userId));
            setDataRadarChart(fetchDataPerformance(userId));
            setDataRadialBarChart(fetchDataScore(userId));
            setDataNutritionInfo(fetchDataNutritionInfo(userId));
        };
        fetchData(params.userId);
    }, []);

    return (
        <>
            <div className="dashboard-container">
                <LeftBar />
                <main className="dashboard">
                    {dataHello && <Hello data={dataHello} />}
                    {dataBarChart && <MyBarChart data={dataBarChart} />}
                    {dataLineChart && <MyLineChart data={dataLineChart} />}
                    {dataRadarChart && <MyRadarChart data={dataRadarChart} />}
                    {dataRadialBarChart && (
                        <MyRadialBarChart data={dataRadialBarChart} />
                    )}
                    {dataNutritionInfo && (
                        <NutritionInfosContainer data={dataNutritionInfo} />
                    )}
                </main>
            </div>
        </>
    );
};

export default Dashboard;
