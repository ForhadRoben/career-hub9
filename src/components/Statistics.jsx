import React from 'react';
import { CartesianGrid, Line, ComposedChart, Tooltip, XAxis, YAxis, Legend, Area, Bar, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
            Assignment: '01',
            marks: 60,
        },
        {
            Assignment: '02',
            marks: 60,
        },
        {
            Assignment: '03',
            marks: 60,
        },
        {
            Assignment: '04',
            marks: 60,
        },
        {
            Assignment: '05',
            marks: 60,
        },
        {
            Assignment: '06',
            marks: 55,
        },
        {
            Assignment: '07',
            marks: 60,
        },
        {
            Assignment: '08',
            marks: 60,
        },
    ];

    return (
        <div className=" object-cover w-[50vw] mx-auto mt-10 h-[50vh]">

            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );

};

export default Statistics;