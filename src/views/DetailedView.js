import React from 'react'
import { useParams } from 'react-router-dom';

const DetailedView = () => {
    const ticker = useParams().ticker;
    return (
        <div>
            <h1>{ticker}</h1>
            <p>Desc</p>
        </div>
    )
}

export default DetailedView