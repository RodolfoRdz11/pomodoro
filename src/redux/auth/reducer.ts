import actions from "./actions";
import User from "src/models/User";

interface State {
    isAuth: boolean;
    isLoading: boolean;
    user: User,
    currentTab: number;
    validation: {
        isError: boolean;
        message: string;
    }
}

const initialState: State = {
    isAuth: false,
    isLoading: false,
    user: {
        name: '',
        email: ''
    },
    currentTab: 0,
    validation: {
        isError: false,
        message: ''
    }
}

const reducer = (state: State = initialState, action: any) => {
    const { type, payload } = action;

    switch(type) {

        case actions.LOGIN: {
            return {
                ...state,
                isLoading: true
            }
        }

        case actions.SET_TAB: {
            return {
                ...initialState,
                currentTab: payload.tab
            }
        }

        case actions.SET_LOGIN_DATA: {
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                isLoading: false,
                validation: initialState.validation
            }
        }

        case actions.SET_ERROR: {
            return {
                ...state,
                isLoading: false,
                validation: {
                    isError: true,
                    message: payload.message
                }
            }
        }

        case actions.LOGOUT: {
            return initialState;
        }

        default:
            return state;
    }    
}

export default reducer;