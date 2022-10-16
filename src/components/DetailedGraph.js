import React from 'react'
import ReactApexChart from 'react-apexcharts'

const DetailedGraph = (props) => {
    const { options, series } = props;
    
    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={350}
            />
        </div>
    )
}

export default DetailedGraph