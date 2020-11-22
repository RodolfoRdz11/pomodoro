import actions from "./actions";
import Task from "src/models/Task";

interface State {
    tasks: Array<Task>;   
    activeTasks: Array<Task>;
}

const initialState: State = {
    tasks: [],
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

        default: 
            return state;
    }
}

export default reducer;