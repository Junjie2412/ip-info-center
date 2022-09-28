import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICBarChart = (props) => {

    const options = {

        series: [{
            name: props.yaxistitle ? props.yaxistitle : "",
            data: props.series ? (props.series.slice(0, (props.topValues ? props.topValues : 10))) : []
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar : {
                    export: {
                        csv: {
                            filename: props.filename,
                            headerCategory: props.xaxistitle ? props.xaxistitle : "",
                        }
                    }
                }
            },
            title: {
                text: props.title,
                style: {
                    color: props.darkMode ? "white" : ""
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: props.borderRadius ? props.borderRadius : 0,
                    columnWidth: '50%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2
            },

            grid: {
                row: {
                    colors: ['#fff', '#f2f2f2']
                }
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    style: {
                        colors: props.darkMode ? "white" : ""
                    }
                },
                categories: props.labels ? (props.labels.slice(0, (props.topValues ? props.topValues : 10))) : [],
                tickPlacement: 'on',
                title: {
                    text: props.xaxistitle,
                    style: {
                        color: props.darkMode ? "white" : ""
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
            },
            fill: {
                type: 'gradient',
                colors: props.fillColors,
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100]
                },
            },
            tooltip: {
                enabled: true,
                theme: props.darkMode ? "dark" : "light"
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
            <ReactApexChart options={options.options} series={options.series} type="bar" width={600} height={350}/>
        </Aux>
    );
};

export default IPICBarChart;