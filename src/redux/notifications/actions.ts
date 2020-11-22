type severity = 'success' | 'warning' | 'info' | 'error';

const actions = {
    ADD: "NOTIFICATIONS/ADD",
    CLEAR: "NOTIFICATIONS/CLEAR",

    add: (type: severity, message: string) => ({
        type: actions.ADD,
        payload: { type, message }
    }),
    clear: () => ({
        type: actions.CLEAR
    })
}

export default actions;