import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from "src/redux/store";

let state = store.getState();
store.subscribe(() => {
    state = store.getState();
});

const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={props => state.auth.isAuth
            ? <Component {...props} />
            : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }
    />
);

export default PrivateRoute;