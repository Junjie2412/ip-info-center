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
                },
                offsetY: 100,
                fontSize: '18px',
            },
            labels: props.labels,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom',
                    }
                }
            },{
                breakpoint: 1320,
                options: {
                    chart: {
                        width: 440
                    }
                }
            }]
        }
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="donut" width={520}/>
        </Aux>
    );
};

export default IPICPieChart;