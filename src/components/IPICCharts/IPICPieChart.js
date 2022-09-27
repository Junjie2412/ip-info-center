import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICPieChart = (props) => {

    const options = {

        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            title: {
                text: props.title
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="donut" width={450}/>
        </Aux>
    );
};

export default IPICPieChart;