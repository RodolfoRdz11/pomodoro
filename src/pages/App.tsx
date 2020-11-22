import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ConnectedRouter } from "connected-react-router";
import CssBaseline from "@material-ui/core/CssBaseline";

import { store, history, persistor } from "src/redux/store";

import Login from "./Login/Login";
import Home from "./Home/Home";

function App() {
    return (
        <Provider store={store}>
          <CssBaseline />
            <PersistGate persistor={persistor}>
                <ConnectedRouter history={history} >
                    <Switch>
                        <Redirect exact from="/" to="/app" />
                        <Route exact path="/login" component={Login} />
                        <Route path="/app" component={Home} />
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
