import React, { useState } from 'react'
import { Graph, MyForm } from '../components';

const Home = () => {
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));

    return (
        <div>
            <MyForm
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
            <Graph />
        </div>
    )
}

export default Home