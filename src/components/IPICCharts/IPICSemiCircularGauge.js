import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ReactApexChart from "react-apexcharts";

const IPICSemiCircularGauge = (props) => {

    const options = {

        series: [props.value ? props.value : (props.label==="HIGH" ? 100 : (props.label==="MEDIUM" ? 50 : 20))],
        options: {
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                }
            },
            legend: {
                show: false,
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: '#999',
                            opacity: 1,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            fontWeight: 'bold',
                        },
                        value: {
                            offsetY: -50,
                            fontSize: '15px',
                            formatter: function (val) {
                                return props.value ? ("Risk Score : " + (val*10)) : ""
                            }
                        },
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    shadeIntensity: 0.2,
                    inverseColors: false,
                    opacityFrom: 1,
                    gradientToColors: ['yellow'],
                    opacityTo: 1,
                    stops: [0]
                },
            },
            labels: [props.label + ' RISK'],
            theme: {
                monochrome: {
                    enabled: true,
                    color: props.color,
                    shadeTo: 'light',
                    shadeIntensity: 0.65
                },
            }
        },
    };

    return (
        <Aux>
            <ReactApexChart options={options.options} series={options.series} type="radialBar" width={350}/>
        </Aux>
    );
};

export default IPICSemiCircularGauge ;