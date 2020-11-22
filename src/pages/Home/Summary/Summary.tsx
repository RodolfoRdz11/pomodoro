import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import ListAlt from "@material-ui/icons/ListAlt";
import TimeIcon from "@material-ui/icons/AvTimer";

import Task from "src/models/Task";
import { RootState } from "src/redux/rootReducer";
import { useSelector } from "react-redux";

import useStyles from "./Summary-styles";
import TotalCard from "src/components/TotalCard";
import TaskChart from "./TasksChart/TaskChart";

function timeConversion(millisec: number) {
    var seconds = (millisec / 1000).toFixed(1);
    var minutes = (millisec / (1000 * 60)).toFixed(1);
    var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (parseInt(seconds) < 60) {
        return seconds + " Sec";
    } else if (parseInt(minutes) < 60) {
        return minutes + " Min";
    } else if (parseInt(hours) < 24) {
        return hours + " Hrs";
    } else {
        return days + " Days"
    }
}

function Summary() {
    const classes = useStyles();
    const user =  useSelector((state: RootState) => state.auth.user);
    const finishedTasks = useSelector((state: RootState) => state.tasks.finishedTasks);

    const [totalTime, setTotalTime] = useState<string>('');

    useEffect(() => {

        let total = 0;
        finishedTasks.forEach((task: Task) => {
            total += task.time ? task.time : 0;
        })
        setTotalTime(timeConversion(total));

    }, [finishedTasks])

    return (
        <Grid container>
            <Grid container item xs={12}>
                <Grid item md={4} xs={12} className={classes.item}>
                    <TotalCard
                        icon={ListAlt}
                        data={finishedTasks.length}
                        secondaryText="Finished tasks"
                        backgroundColor="#303F9F"
                        color="#fff"
                    />
                </Grid>
                <Grid item md={4} xs={12} className={classes.item}>
                    <TotalCard
                        icon={TimeIcon}
                        data={totalTime}
                        secondaryText="Total time"
                        backgroundColor="#303F9F"
                        color="#fff"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} className={classes.item}>
                <TaskChart 
                    user={user}
                    finishedTasks={finishedTasks}
                />
            </Grid>
        </Grid>
    )
}

export default Summary;