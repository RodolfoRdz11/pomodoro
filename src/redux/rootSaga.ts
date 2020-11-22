import {all} from 'redux-saga/effects';
import pomodoroSaga from "./pomodoro/saga";

export default function* rootSaga() {
    yield all([
        pomodoroSaga()
    ])
}