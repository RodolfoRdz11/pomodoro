import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from "history";

import pomodoro from "./pomodoro/reducer";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    pomodoro
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;