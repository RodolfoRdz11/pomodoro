import User from "src/models/User";

const actions = {
    LOGIN: "AUTH/LOGIN",
    SET_TAB: "AUTH/SET_TAB",
    SET_LOGIN_DATA: "AUTH/SET_LOGIN_DATA",
    SET_ERROR: "AUTH/SET_ERROR",

    login: (user: User) => ({
        type: actions.LOGIN,
        payload: { user }
    }),
    setTab: (tab: number) => ({
        type: actions.SET_TAB,
        payload: { tab }
    }),
    setLoginData: (user: User) => ({
        type: actions.SET_LOGIN_DATA,
        payload: { user }
    }),
    setError: (message: string) => ({
        type: actions.SET_ERROR,
        payload: { message }
    })
}

export default actions;