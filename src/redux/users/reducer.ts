import User from "src/models/User";
import actions from "./actions";

interface State {
    users: Array<User>;
    validation: {
        isError: boolean;
        message: string;
    }
}

const initialState: State = {
    users: [],
    validation: {
        isError: false,
        message: ''
    }
}

const reducer = (state: State = initialState, action: any) => {
    const { type, payload } = action;

    switch(type) {

        case actions.CREATE: {
            const users = [...state.users];
            const { name, email, password } = payload.user;
            users.push({
                id: users.length + 1,
                name, 
                email, password
            });

            return {
                ...state,
                users
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

        default: 
            return state;
    }
}

export default reducer;