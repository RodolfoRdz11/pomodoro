import Task from "src/models/Task";

const actions = {
    ADD: "TASKS/ADD",
    UPDATE: "TASKS/UPDATE",
    FINISH: "TASKS/FINISH",
    UPDATE_FINISHED : "TAKS/UPDATE_FINISHED",
    
    add: (task: Task) => ({
        type: actions.ADD,
        payload: { task }
    }),
    update: (task: Task) => ({
        type: actions.UPDATE,
        payload: { task }
    }),
    finish: (task: Task) => ({
        type: actions.FINISH,
        payload: { task }
    }),
    updateFinished: (task: Task) => ({
        type: actions.UPDATE_FINISHED,
        payload: { task }
    })
}

export default actions;