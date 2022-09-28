import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICPieChart = (props) => {

    const options = {

        series: props.series,
        options: {
            chart: {
                type: 'donut',
            },
            title: {
                text: props.title,
                style: {
                    color: props.darkMode ? "white" : ""
                }
            },
            legend: {
                labels: {
                    colors: props.darkMode ? "white" : "",
                    useSeriesColors: false
                }
            },
            labels: props.labels,
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