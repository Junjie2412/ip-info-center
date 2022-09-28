import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICLineBarChart = (props) => {

    const options = {
        series: [{
            name: props.barTitle,
            type: 'column',
            data: props.lineData ? (props.columnData.slice(0, (props.topValues ? props.topValues : 10))) : []
        }, {
            name: props.lineTitle,
            type: 'line',
            data: props.lineData ? (props.lineData.slice(0, (props.topValues ? props.topValues : 10))) : []
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar : {
                    export: {
                        csv: {
                            filename: props.filename,
                            headerCategory: props.xaxistitle ? props.xaxistitle : "",
                        }
                    }
                }
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
            labels: props.labels ? (props.labels.slice(0, (props.topValues ? props.topValues : 10))) : [],
            xaxis: {
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
            },
            responsive: [{
                breakpoint: 1320,
                options: {
                    chart: {
                        width: 520
                    }
                }
            }]
        }
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="line" width={600} height={350}/>
        </Aux>
    );
};

export default IPICLineBarChart;