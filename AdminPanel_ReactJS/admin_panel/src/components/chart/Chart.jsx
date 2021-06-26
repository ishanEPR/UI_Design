import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
         
        },
        {
          name: 'Feb',
          "Active User": 3000,
        
        },
        {
          name: 'Mar',
          "Active User": 2000,
       
        },
        {
          name: 'Apr',
          "Active User": 2780,
         
         
        },
        {
          name: 'May',
          "Active User": 1890,
       
        },
        {
          name: 'Jun',
          "Active User": 2390,

        },
        {
          name: 'July',
          "Active User": 3490,
         
        },
        {
            name: 'Aug',
            "Active User": 1490,
           
          },
          {
            name: 'Sep',
            "Active User": 490,
           
          },
          {
            name: 'Oct',
            "Active User": 6490,
           
          },
          {
            name: 'Nov',
            "Active User": 6090,
           
          },
          {
            name: 'Dec',
            "Active User": 490,
           
          },
      ];



    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>

            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    {/* monotone means drew chart */}
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                    {/* tooltip means show mesurement */}
                    <Tooltip/>
                    {/* show the cartesean */}
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>


                </LineChart>

            </ResponsiveContainer>
            
        </div>
    )
}
