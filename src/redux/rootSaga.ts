import {all} from 'redux-saga/effects';
import pomodoroSaga from "./pomodoro/saga";
import authSaga from "./auth/saga";
import userSaga from "./users/saga";

export default function* rootSaga() {
    yield all([
        pomodoroSaga(),
        authSaga(),
        userSaga()
    ])
}