import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { timeConversion } from "src/utils";

import ListAlt from "@material-ui/icons/ListAlt";
import TimeIcon from "@material-ui/icons/AvTimer";

import Task from "src/models/Task";
import { RootState } from "src/redux/rootReducer";
import { useSelector } from "react-redux";

import useStyles from "./Summary-styles";
import TotalCard from "src/components/TotalCard";
import TaskChart from "./TasksChart/TaskChart";
import TaskList from "./TaskList/TaskList";

function Summary() {
    const classes = useStyles();
    const user =  useSelector((state: RootState) => state.auth.user);
    const finishedTasks = useSelector((state: RootState) => state.tasks.finishedTasks);

    const [ownFinishedTasks, setOwnFinishedTasks] = useState<Array<Task>>([]);
    const [totalTime, setTotalTime] = useState<string>('');

    useEffect(() => {
        let total = 0;
        ownFinishedTasks.forEach((task: Task) => {
            total += task.time ? task.time : 0;
        })
        setTotalTime(timeConversion(total));
    }, [ownFinishedTasks])


    useEffect(() => {
        const _ownFinishedTasks: Array<Task> = [];
        finishedTasks.forEach((task: Task) => {
            if(task.userId === user.id)
                _ownFinishedTasks.push(task);
        })
        setOwnFinishedTasks(_ownFinishedTasks);
    },[finishedTasks, user.id])

    return (
        <Grid container>
            <Grid container item xs={12}>
                <Grid item md={4} xs={12} className={classes.item}>
                    <TotalCard
                        icon={ListAlt}
                        data={ownFinishedTasks.length}
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
                    finishedTasks={ownFinishedTasks}
                />
            </Grid>
            <Grid item xs={12} md={6} className={classes.item}>
               <TaskList finishedTasks={ownFinishedTasks} />
            </Grid>
        </Grid>
    )
}

export default Summary;