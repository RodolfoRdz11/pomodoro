import Task from "src/models/Task";

const actions = {
    ADD: "TASKS/ADD",
    UPDATE: "TASKS/UPDATE",
    
    add: (task: Task) => ({
        type: actions.ADD,
        payload: { task }
    }),
    update: (task: Task) => ({
        type: actions.UPDATE,
        payload: { task }
    })
}

export default actions;