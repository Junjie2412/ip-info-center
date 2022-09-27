import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICDoubleLineChart = (props) => {

    const options = {

        series: [
            {
                name: props.lineTitle,
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            },
            {
                name: props.dashedLineTitle,
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
            title: {
                text: props.title,
                align: 'left',
                style: {
                    color: props.darkMode ? "white" : ""
                }
            },
            legend: {
                tooltipHoverFormatter: function(val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                },
                labels: {
                    colors: props.darkMode ? "white" : "",
                    useSeriesColors: false
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                    '10 Jan', '11 Jan', '12 Jan'
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
                labels: {
                    style: {
                        colors: props.darkMode ? "white" : ""
                    }
                }
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }
                ],
                theme: props.darkMode ? "dark" : "light"
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        }
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="line" width={600} height={350}/>
        </Aux>
    );
};

export default IPICDoubleLineChart;