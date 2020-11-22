import React, { useState, useEffect, createRef } from "react";
import { Typography, Paper, Chip, Container, IconButton } from "@material-ui/core";
import { Pause as PauseIcon, PlayArrow as PlayIcon, Restore as ResetIcon } from "@material-ui/icons";
import clsx from "clsx";
import soundFile from "src/assets/sound.mp3";

import useStyles from "./Pomodoro-styles";
import { RootState } from "src/redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import pomodoroActions from "src/redux/pomodoro/actions";

const types = {
    POMODORO: 'pomodoro',
    SHORT_BREAK: 'short_break',
    LONG_BREAK: 'long_break'
}

function PomodoroApp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const pomodoro = useSelector((state: RootState) => state.pomodoro);
    const start = () => dispatch(pomodoroActions.start());
    const pause = () => dispatch(pomodoroActions.pause());
    const reset = () => dispatch(pomodoroActions.reset());

    const [timeInterval, setTimeInterval] = useState<any>(null);
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

    useEffect(() => {
        sound.play();
    }, [pomodoro.type])

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

        </Container>
    )
}

export default PomodoroApp;