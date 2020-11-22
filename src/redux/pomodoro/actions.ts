const actions = {
    START: "POMODORO/START",
    PAUSE: "POMODORO/PAUSE",
    RESET: "POMODORO/RESET",
    SET_POMODORO: "POMODORO/SET_POMODORO",
    SET_SHORT_BREAK: "POMODORO/SET_SHORT_BREAK",
    SET_LONG_BREAK: "POMODORO/SET_LONG_BREAK",

    start: () => ({
        type: actions.START
    }),
    pause: () => ({
        type: actions.PAUSE
    }),
    reset: () => ({
        type: actions.RESET
    }),
    setPomodoro: () => ({
        type: actions.SET_POMODORO
    }),
    setShortBreak: () => ({
        type: actions.SET_SHORT_BREAK
    }),
    setLongBreak: () => ({
        type: actions.SET_LONG_BREAK
    })
}

export default actions;