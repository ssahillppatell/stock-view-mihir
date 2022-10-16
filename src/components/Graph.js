import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const Graph = () => {
    const [myData, setMyData] = useState([
        {
            _id: "20MICRONS",
            date: [
            "2022-04-27T18:30:00.000Z",
            "2022-05-01T18:30:00.000Z",
            "2022-05-03T18:30:00.000Z",
            "2022-05-04T18:30:00.000Z",
            ],
            closePrice: [83, 83.05, 79.9, 91.7],
        },
        {
            "_id": "21STCENMGM",
            "date": [
                "2022-04-27T18:30:00.000Z",
                "2022-05-01T18:30:00.000Z",
                "2022-05-03T18:30:00.000Z",
                "2022-05-04T18:30:00.000Z"
            ],
            "closePrice": [
                28.15,
                28.95,
                29.5,
                29.7
            ]
        },
        {
            "_id": "3IINFOLTD",
            "date": [
                "2022-04-27T18:30:00.000Z",
                "2022-05-01T18:30:00.000Z",
                "2022-05-03T18:30:00.000Z",
                "2022-05-04T18:30:00.000Z"
            ],
            "closePrice": [
                57.4,
                55.75,
                54.5,
                53.9
            ]
        }
    ]);

    // Create a line chart
    return (
        <div>
            <h1>Graph</h1>
            <Line
                data={{
                    labels: myData[0].date,
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
            />
        </div>
    );
};

export default Graph;
