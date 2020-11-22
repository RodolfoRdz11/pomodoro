import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { timeConversion } from "src/utils";
import Task from "src/models/Task";
import useStyles from "./TaskList-styles";
import clsx from "clsx";

interface Props {
    finishedTasks: Array<Task>;
}

function TaskList({ finishedTasks }: Props) {
    const classes = useStyles();

    return (
        <div id="list" className={classes.container}>
            {finishedTasks.length > 0 ? (
                <>
                    <Typography variant="h5" className={clsx(classes.item, classes.title)}> Finished tasks </Typography>
                    {finishedTasks.map((task: Task) => (
                        <Card className={classes.item}>
                            <CardContent>
                                <Typography> {task.description} </Typography>
                            </CardContent>
                            <div className={classes.flexEnd}>
                                <Typography> Time: {timeConversion(task.time ? task.time : 0)} </Typography>
                            </div>
                        </Card>
                    ))}
                </>
            ) : (
                    <Typography variant="h5" className={clsx(classes.item, classes.title)}> No finished tasks </Typography>
                )}

        </div>
    )
}

export default TaskList;