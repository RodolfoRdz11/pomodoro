import actions from "./actions";

const time = {
    pomodoro: 1500000,
    shortBreak: 300000,
    longBreak: 1800000
}

interface State {
    time: number;
    type: string;
    isStarted: boolean;
    breakCount: number;
    timeAccumulated: number;
}

const initialState: State = {
    isStarted: false,
    time: time.pomodoro,
    type: 'pomodoro',
    breakCount: 0,
    timeAccumulated: 0
}

const reducer = (state: State = initialState, action: any) => {
    const { type } = action;

    switch(type) {
        
        case actions.START: {
            return {
                ...state,
                time: state.time - 1000,
                isStarted: true
            }
        }

        case actions.PAUSE: {
            return {
                ...state,
                isStarted: false
            }
        }

        case actions.SET_POMODORO: {
            return {
                ...state,
                type: 'pomodoro',
                time: time.pomodoro,
                timeAccumulated: state.timeAccumulated + time.pomodoro
            }
        }

        case actions.SET_SHORT_BREAK: {
            return {
                ...state,
                type: 'short_break',
                time: time.shortBreak,
                breakCount: state.breakCount + 1
            }
        }

        case actions.SET_LONG_BREAK: {
            return {
                ...state,
                type: 'long_break',
                time: time.longBreak,
                breakCount: 0,
            }
        }

        case actions.RESET: {
            return initialState;
        }

        default: 
            return state;

    }
}

export default reducer;