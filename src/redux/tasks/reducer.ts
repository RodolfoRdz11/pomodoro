import actions from "./actions";
import Task from "src/models/Task";

interface State {
    finishedTasks: Array<Task>;   
    activeTasks: Array<Task>;
}

const initialState: State = {
    finishedTasks: [],
    activeTasks: []
}

const reducer = (state: State = initialState, action: any) => {
    const { type, payload } = action;

    switch(type) {

        case actions.ADD: {
            const activeTasks = [...state.activeTasks];
            activeTasks.push(payload.task);

            return {
                ...state,
                activeTasks
            }
        }

        case actions.UPDATE: {
            const activeTasks = [...state.activeTasks];
            const index = activeTasks.findIndex((task: Task) => task.id === payload.task.id);
            activeTasks[index] = payload.task;

            return {
                ...state,
                activeTasks
            }
        }

        case actions.FINISH: {
            const finishedTasks = [...state.finishedTasks];
            const activeTasks = [...state.activeTasks];
            const index = activeTasks.findIndex((task: Task) => task.id === payload.task.id);

            finishedTasks.push(payload.task)
            activeTasks.splice(index, 1);

            return {
                ...state,
                finishedTasks,
                activeTasks
            }
        }

        case actions.UPDATE_FINISHED: {
            const finishedTasks = [...state.finishedTasks];
            const index = finishedTasks.findIndex((task: Task) => task.id === payload.task.id);
            finishedTasks[index] = payload.task;

            return {
                ...state,
                finishedTasks
            }
        }

        default: 
            return state;
    }
}

export default reducer;