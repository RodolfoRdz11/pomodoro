import { put, takeEvery, select } from "redux-saga/effects";
import actions from "./actions";
import taskActions from "../tasks/actions";

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

function* setAccumulatedTime({ payload }: any) {
    const { task } = payload;
    const pomodoro = yield select(state => state.pomodoro);

    task.time = pomodoro.timeAccumulated + (1500000 - pomodoro.time);
    task.restedTime = pomodoro.restedTime;

    yield put(taskActions.updateFinished(task));
    yield put(actions.reset());
}

export default function* index() {
    yield takeEvery(actions.START, verifyValues);
    yield takeEvery(taskActions.FINISH, setAccumulatedTime);
}