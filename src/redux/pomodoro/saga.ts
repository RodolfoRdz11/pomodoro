import { put, takeEvery, select } from "redux-saga/effects";
import actions from "./actions";

function* verifyValues() {
    const pomodoro = yield select(state => state.pomodoro);

    if (pomodoro.time < 0) {
        if (pomodoro.type === 'pomodoro') {
            if (pomodoro.breakCount < 3)
                yield put(actions.setShortBreak());
            else
                yield put(actions.setLongBreak());
        } else {
            yield put(actions.setPomodoro());
        }
    }
}

export default function* index() {
    yield takeEvery(actions.START, verifyValues);
}