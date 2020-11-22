import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from "history";

import pomodoro from "./pomodoro/reducer";
import auth from "./auth/reducer";
import users from "./users/reducer";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    pomodoro,
    auth, 
    users
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;