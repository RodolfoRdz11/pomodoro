import { put, takeEvery, select } from "redux-saga/effects";
import actions from "./actions";
import User from "src/models/User";


function* register({ payload }: any) {
    const users = yield select(state => state.users.users);
    const user = users.find((user: User) => user.email === payload.user.email);
    if (user) {
        yield put(actions.setError('Already exists an user with this email'))
    } else {
        yield put(actions.create(payload.user))
    }
}

export default function* index() {
    yield takeEvery(actions.REGISTER, register);
}