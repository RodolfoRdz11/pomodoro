import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { timeConversion } from "src/utils";

import ListAlt from "@material-ui/icons/ListAlt";
import TimeIcon from "@material-ui/icons/AvTimer";
import AlarmIcon from "@material-ui/icons/AlarmOff";

import Task from "src/models/Task";
import { RootState } from "src/redux/rootReducer";
import { useSelector } from "react-redux";

import useStyles from "./Summary-styles";
import TotalCard from "src/components/TotalCard";
import TaskChart from "./TasksChart/TaskChart";
import TaskList from "./TaskList/TaskList";

interface TotalTime {
    totalWorked: string;
    totalRested: string;
}

function Summary() {
    const classes = useStyles();
    const user =  useSelector((state: RootState) => state.auth.user);
    const finishedTasks = useSelector((state: RootState) => state.tasks.finishedTasks);

    const [ownFinishedTasks, setOwnFinishedTasks] = useState<Array<Task>>([]);
    const [totalTime, setTotalTime] = useState<TotalTime>({ totalWorked: '0 Sec', totalRested: '0 Sec' });

    useEffect(() => {
        let totalWorked = 0;
        let totalRested = 0;
        ownFinishedTasks.forEach((task: Task) => {
            totalWorked += task.time ? task.time : 0;
            totalRested += task.restedTime ? task.restedTime : 0;
        })
        setTotalTime({
            totalWorked: timeConversion(totalWorked),
            totalRested: timeConversion(totalRested)
        });
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
                        data={totalTime.totalWorked}
                        secondaryText="Worked time"
                        backgroundColor="#303F9F"
                        color="#fff"
                    />
                </Grid>
                <Grid item md={4} xs={12} className={classes.item}>
                    <TotalCard
                        icon={AlarmIcon}
                        data={totalTime.totalRested}
                        secondaryText="Rested time"
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