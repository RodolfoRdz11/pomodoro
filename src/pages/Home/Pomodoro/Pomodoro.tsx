import React, { useState, useEffect } from "react";
import { Typography, Paper, Chip, Container, IconButton, Collapse, Card, CardContent, Button } from "@material-ui/core";
import { Pause as PauseIcon, PlayArrow as PlayIcon, Restore as ResetIcon, Edit as EditIcon } from "@material-ui/icons";
import clsx from "clsx";
import soundFile from "src/assets/sound.mp3";

import useStyles from "./Pomodoro-styles";
import { RootState } from "src/redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import pomodoroActions from "src/redux/pomodoro/actions";
import taskActions from "src/redux/tasks/actions";

import Task from "src/models/Task";
import AddZone from "src/components/AddZone";
import TaskDialog from "src/components/TaskDialog";

const types = {
    POMODORO: 'pomodoro',
    SHORT_BREAK: 'short_break',
    LONG_BREAK: 'long_break'
}

function PomodoroApp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const pomodoro = useSelector((state: RootState) => state.pomodoro);
    const activeTasks = useSelector((state: RootState) => state.tasks.activeTasks);

    const start = () => dispatch(pomodoroActions.start());
    const pause = () => dispatch(pomodoroActions.pause());
    const reset = () => dispatch(pomodoroActions.reset());
    const finish = (task: Task) => dispatch(taskActions.finish(task));

    const [timeInterval, setTimeInterval] = useState<any>(null);
    const [taskDialog, setTaskDialog] = useState<any>({ open: false, isNew: true, task: { description: '' } });
    const [activeTask, setActiveTask] = useState<Task>({  userId: 0, description: '' });
    const sound = new Audio(soundFile);

    const format = (time: number) => {
        let minute: number = Math.floor(time / 60000);
        let minuteText: string = minute < 10 ? '0' + minute : minute.toString();

        let second: number = (time - 60000 * minute) / 1000;
        let secondText: string = second < 10 ? '0' + second : second.toString();

        return `${minuteText}:${secondText}`;
    }

    function handleStart() {
        if (pomodoro.isStarted) {
            clearInterval(timeInterval);
            pause();
        } else {
            setTimeInterval(setInterval(() => {
                start();
            }, 1000));
        }
    }

    function handleReset() {
        clearInterval(timeInterval);
        reset();
    }

    function handleFinish() {
        clearInterval(timeInterval);
        finish(activeTask);
    }

    function getActiveTaskByUser(userId: number) {
        return activeTasks.find((task: any) => task.userId === userId);
    }

    useEffect(() => {
        sound.play();
        //eslint-disable-next-line
    }, [pomodoro.type]);

    useEffect(() => {
        const task = getActiveTaskByUser(user.id);
        if (task) 
            setActiveTask(task);
        else 
            setActiveTask({  userId: 0, description: '' });
        //eslint-disable-next-line
    }, [activeTasks, user.id]);

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Paper className={classes.paper}>

                <div className={classes.actionsContainer}>
                    <Chip
                        label="POMODORO"
                        className={clsx(classes.chip, {
                            [classes.activeChip]: pomodoro.type === types.POMODORO
                        })}
                    />
                    <Chip
                        label="SHORT BREAK"
                        className={clsx(classes.chip, {
                            [classes.activeChip]: pomodoro.type === types.SHORT_BREAK
                        })}
                    />
                    <Chip
                        label="LONG BREAK"
                        className={clsx(classes.chip, {
                            [classes.activeChip]: pomodoro.type === types.LONG_BREAK
                        })}
                    />
                </div>

                <Typography className={classes.timerText}> {format(pomodoro.time)} </Typography>

                <div className={classes.actionsContainer}>
                    <IconButton className={classes.actionButton} onClick={handleStart} >
                        {pomodoro.isStarted ? <PauseIcon className={classes.actionIcon} /> : <PlayIcon className={classes.actionIcon} />}
                    </IconButton>
                    <IconButton className={classes.actionButton} onClick={handleReset}>
                        <ResetIcon className={classes.actionIcon} />
                    </IconButton>
                </div>
            </Paper>

            <Collapse in={Boolean(activeTask?.userId)} className={classes.taskContainer}>
                <Card>
                    <CardContent>
                        <Typography> {activeTask?.description} </Typography>
                    </CardContent>
                    <div className={classes.spaceBetween}>
                        <IconButton onClick={() => setTaskDialog({ open: true, isNew: false, task: activeTask})}>
                            <EditIcon />
                        </IconButton>
                        <Button 
                            variant="contained" 
                            color="primary"
                            disableElevation
                            onClick={handleFinish}
                        >
                            Finish
                        </Button>
                    </div>
                </Card>
            </Collapse>

            <TaskDialog
                open={taskDialog.open}
                task={taskDialog.task}
                isNew={taskDialog.isNew}
                handleOpen={() => setTaskDialog({ open: false, isNew: true, task: { description: '' } })}
            />

            {!activeTask?.id && (
                <AddZone
                    text="Add task"
                    onClick={() => setTaskDialog({ open: true, isNew: true, task: { description: '' } })}
                    disabled={Boolean(getActiveTaskByUser(user.id))}
                />
            )}


        </Container >
    )
}

export default PomodoroApp;