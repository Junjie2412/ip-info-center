import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICBarChart = (props) => {

    const options = {

        series: [{
            name: props.seriesName ? props.seriesName : "",
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35].sort().reverse()
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            title: {
                text: props.title
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
                    rotate: -45
                },
                categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                    'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
                ],
                tickPlacement: 'on',
                title: {
                    text: props.xaxistitle,
                }
            },
            yaxis: {
                title: {
                    text: props.yaxistitle,
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
            }
        }
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="bar" width={600} height={350}/>
        </Aux>
    );
};

export default IPICBarChart;