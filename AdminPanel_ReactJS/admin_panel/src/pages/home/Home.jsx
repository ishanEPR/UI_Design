import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import { UserData } from '../../dummyData';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
            
        </div>
    )
}
