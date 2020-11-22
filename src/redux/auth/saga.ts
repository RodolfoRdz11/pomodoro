import { takeEvery, select, put } from "redux-saga/effects";
import actions from "./actions";
import User from "src/models/User";
import { history } from "../rootReducer";

function* login({ payload }: any) {
    const users = yield select(state => state.users.users);
    const user = users.find((user: User) => user.email === payload.user.email);

    if (user) {
        if (user.password === payload.user.password) {
            yield put(actions.setLoginData(user));
            yield history.push('/app');
        } else {
            yield put(actions.setError('Invalid password'));
        }
    } else {
        yield put(actions.setError('Invalid user'))
    }
}

function* logout() {
    yield history.push('/login');
}

export default function* index() {
    yield takeEvery(actions.LOGIN, login);
    yield takeEvery(actions.LOGOUT, logout);
}