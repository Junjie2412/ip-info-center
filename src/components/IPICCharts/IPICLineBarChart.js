import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICLineBarChart = (props) => {

    const options = {
        series: [{
            name: props.barTitle,
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: props.lineTitle,
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: props.title,
                style: {
                    color: props.darkMode ? "white" : ""
                }
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
                type: 'datetime',
                title: {
                    text: props.xaxistitle,
                    style: {
                        color: props.darkMode ? "white" : ""
                    }
                },
                labels: {
                    style: {
                        colors: props.darkMode ? "white" : ""
                    }
                }
            },
            yaxis: [{
                title: {
                    text: props.barTitle,
                    style: {
                        color: props.darkMode ? "white" : ""
                    }
                },
                labels: {
                    style: {
                        colors: props.darkMode ? "white" : ""
                    }
                }

            }, {
                opposite: true,
                title: {
                    text: props.lineTitle,
                    style: {
                        color: props.darkMode ? "white" : ""
                    }
                },
                labels: {
                    style: {
                        colors: props.darkMode ? "white" : ""
                    }
                }
            }],
            tooltip: {
                enabled: true,
                theme: props.darkMode ? "dark" : "light"
            },
            legend: {
                labels: {
                    colors: props.darkMode ? "white" : "",
                    useSeriesColors: false
                }
            }
        }
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="line" width={600} height={350}/>
        </Aux>
    );
};

export default IPICLineBarChart;