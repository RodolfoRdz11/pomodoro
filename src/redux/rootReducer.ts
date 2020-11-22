import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from "history";

import pomodoro from "./pomodoro/reducer";
import auth from "./auth/reducer";
import users from "./users/reducer";
import tasks from "./tasks/reducer";
import notification from "./notifications/reducer";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    pomodoro,
    auth, 
    users,
    tasks,
    notification
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;