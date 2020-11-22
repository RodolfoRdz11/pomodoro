import React from "react";
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, CardHeader } from "@material-ui/core";
import Task from "src/models/Task";
import User from "src/models/User";

interface Props {
    finishedTasks: Array<Task>;
    user: User;
}

function VentaByPromotorChart({ finishedTasks, user }: Props) {

    function getData() {
        let data: Array<number> = [];
        finishedTasks.forEach((task: Task) => {
            data.push(task.time ? task.time : 0);
        });
        return data;
    }

    function getCategories() {
        let categories: Array<string> = [];
        finishedTasks.forEach((task: Task) => {
            categories.push(task.description);
        });
        return categories;
    }

    const state = {

        series: [
            {
                name: 'Total: ',
                type: 'line',
                data: getData()
            },
        ],
        options: {
            chart: {
                type: 'bar',
                foreColor: "#666",
                stacked: true,
                toolbar: {
                    show: true
                }
            },
            colors: ['#448AFF', '#303F9F'],
            stroke: {
                curve: 'straight',
                width: 4
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false,
                enabledOnSeries: false
            },
            markers: {
                size: 5,
                fillOpacity: 0,
                strokeOpacity: 0,
                hover: {
                    size: 7
                }
            },
            xaxis: {
                categories: getCategories(),
                labels: {
                    style: {
                        fontSize: '7px'
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Time in minutes'
                },
                labels: {
                    formatter: function (value: any) {
                        value = value / 60000;
                        return value.toFixed(1);
                    }
                },
                crosshairs: {
                    show: false,
                    width: 1
                },
                tooltip: {
                    enabled: false,
                    offsetX: 0,
                },
            },
        },

    };

    return (
        <Card>
            <CardHeader title="Tasks summary" />
            <CardContent>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="100%"
                    height="350"
                />
            </CardContent>
        </Card>
    )
}

export default VentaByPromotorChart;
