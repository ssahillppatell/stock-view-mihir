import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const Graph = (props) => {
    const { myData } = props;

    // Create a line chart
    return (
        <div
            className="w-1/2 m-auto"
        >
            <Line
                data={{
                    labels: myData[0].date.map((date) => date.split("T")[0]),
                    datasets: [
                        {
                            label: myData[0]._id,
                            data: myData[0].closePrice,
                            fill: false,
                            borderColor: "red",
                        },
                        {
                            label: myData[1]._id,
                            data: myData[1].closePrice,
                            fill: false,
                            borderColor: "blue",
                        },
                        {
                            label: myData[2]._id,
                            data: myData[2].closePrice,
                            fill: false,
                            borderColor: "green",
                        }
                    ],
                }}
                options={{
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                }}
            />
        </div>
    );
};

export default Graph;
