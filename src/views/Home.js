import React, { useState } from 'react'
import { Graph, MyForm } from '../components';

const Home = () => {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));

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

    return (
        <div>
            <MyForm
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                setMyData={setMyData}
            />
            <Graph
                myData={myData}
            />
        </div>
    )
}

export default Home