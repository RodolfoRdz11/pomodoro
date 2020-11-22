import actions from "./actions";

interface State {
    open: boolean;
    type: string;
    message: string;
}

const initialState: State = {
    open: false,
    type: '',
    message: '',
}

const reducer = (state: State = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {

        case actions.ADD: {
            return {
                ...state,
                open: true,
                type: payload.type,
                message: payload.message
            }
        }

        case actions.CLEAR: {
            return {
                ...state,
                open: false,
                message: ''
            }
        }

        default:
            return state;
    }
}

export default reducer;