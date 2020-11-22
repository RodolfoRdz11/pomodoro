import React, { useState, ChangeEvent, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Task from "src/models/Task";
import { RootState } from "src/redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import taskActions from "src/redux/tasks/actions";

interface Props {
    open: boolean;
    handleOpen: () => void;
    isNew: boolean;
    task: Task;
}

function TaskDialog({ open, handleOpen, isNew, task }: Props) {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const finishedTasks = useSelector((state: RootState) => state.tasks.finishedTasks);
    const addTask = (task: Task) => dispatch(taskActions.add(task));
    const updateTask = (task: Task) => dispatch(taskActions.update(task));
    const [description, setDescription] = useState<string>('');

    function handleTask() {
        if(isNew)
            addTask({
                id: finishedTasks.length + 1,
                userId: user.id,
                description,
                time: 0
            });
        else 
            updateTask({
                ...task,
                description
            })
        handleOpen();
    }

    useEffect(() => {
        if(task.id && !isNew) 
            setDescription(task.description);
    }, [task, isNew])

    return (
        <Dialog open={open} onClose={handleOpen} maxWidth="sm" fullWidth>
            <DialogTitle>{isNew ? 'Add task' : 'Edit task'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Description"
                    placeholder="Here you can write the task you want yo do"
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleOpen} color="primary">
                    Cancel
                    </Button>
                <Button
                    onClick={handleTask}
                    color="primary"
                    variant="contained"
                    disableElevation
                >
                    {isNew ? 'Add' : 'Save'}
                    </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TaskDialog;