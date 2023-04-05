import React, { useEffect, useState } from 'react';
import MyBarChart from '../components/dashboard/MyBarChart';
import LeftBar from '../components/dashboard/LeftBar';
import Header from '../components/layout/Header';
import {
    fetchDataActivity,
    fetchDataAverageSessions,
    fetchDataPerformance,
    fetchDataScore,
    fetchDataNutritionInfo,
} from '../api/mock/formatData';
import { useParams } from 'react-router';
import MyLineChart from '../components/dashboard/MyLineChart';
import MyRadarChart from '../components/dashboard/MyRadarChart';
import MyRadialBarChart from '../components/dashboard/MyRadialBarChart';
import NutritionInfosContainer from '../components/dashboard/NutritionInfosContainer';

const Dashboard = () => {
    const [dataBarChart, setDataBarChart] = useState();
    const [dataLineChart, setDataLineChart] = useState();
    const [dataRadarChart, setDataRadarChart] = useState();
    const [dataRadialBarChart, setDataRadialBarChart] = useState();
    const [dataNutritionInfo, setDataNutritionInfo] = useState();

    const params = useParams();

    useEffect(() => {
        const fetchData = () => {
            setDataBarChart(fetchDataActivity(params.userId));
            setDataLineChart(fetchDataAverageSessions(params.userId));
            setDataRadarChart(fetchDataPerformance(params.userId));
            setDataRadialBarChart(fetchDataScore(params.userId));
            setDataNutritionInfo(fetchDataNutritionInfo(params.userId));
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <LeftBar />
            <main>
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
    );
};

export default Dashboard;