import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICDoubleLineBarChart = (props) => {

    const options = {
        series: [{
            name: props.columnTitle,
            type: 'column',
            data: props.columnData ? (props.columnData.slice(0, (props.topValues ? props.topValues : 10))) : []
        }, {
            name: props.areaTitle,
            type: 'area',
            data: props.areaData ? (props.areaData.slice(0, (props.topValues ? props.topValues : 10))) : []
        }, {
            name: props.lineTitle,
            type: 'line',
            data: props.lineData ? (props.lineData.slice(0, (props.topValues ? props.topValues : 10))) : []
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
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
                width: [0, 2, 5],
                curve: 'smooth',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },
            title: {
                text: props.title,
                style: {
                    color: props.darkMode ? "white" : ""
                }
            },
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100]
                }
            },
            labels: props.labels ? (props.labels.slice(0, (props.topValues ? props.topValues : 10))) : [],
            markers: {
                size: 0
            },
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
                },
            },
            yaxis: {
                title: {
                    text: props.yaxistitle
                },
                min: 0,
                labels: {
                    style: {
                        colors: props.darkMode ? "white" : ""
                    }
                }
            },
            tooltip: {
                shared: true,
                intersect: false,
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

export default IPICDoubleLineBarChart;