import User from "src/models/User";

const actions =  {
    REGISTER: "USERS/REGISTER",
    CREATE: "USERS/CREATE",
    SET_ERROR: "USERS/SET_ERROR",

    register: (user: User) => ({
        type: actions.REGISTER,
        payload: { user }
    }),
    create: (user: User) => ({
        type: actions.CREATE,
        payload: { user }
    }),
    setError: (message: string) => ({
        type: actions.SET_ERROR,
        payload: { message }
    })
}

export default actions;