import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICStackedBarChart = (props) => {

    const options = {

        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            title: {
                text: props.title,
                style: {
                    color: props.darkMode ? "white" : ""
                }
            },
            responsive: [{
                breakpoint: 1320,
                options: {
                    chart: {
                        width: 520
                    }
                        }
                },
                {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10
                },
            },
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                    '01/05/2011 GMT', '01/06/2011 GMT'
                ],
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
            yaxis: {
                title: {
                    text: props.yaxistitle,
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
            legend: {
                position: 'right',
                offsetY: 40,
                labels: {
                    colors: props.darkMode ? "white" : "",
                    useSeriesColors: false
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                enabled: true,
                theme: props.darkMode ? "dark" : "light"
            }
        }
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="bar" width={600} height={350}/>
        </Aux>
    );
};

export default IPICStackedBarChart;