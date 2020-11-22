import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ConnectedRouter } from "connected-react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { store, persistor } from "src/redux/store";
import { history } from "src/redux/rootReducer";

import PrivateRoute from "src/components/PrivateRoute";
import SignIn from "./SignIn/SignIn";
import Home from "./Home/Home";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#303F9F' },
        secondary: { main: '#448AFF' },
    }
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <PersistGate persistor={persistor}>
                    <ConnectedRouter history={history} >
                        <Switch>
                            <Redirect exact from="/" to="/app" />
                            <Route exact path="/login" component={SignIn} />
                            <PrivateRoute path="/app" component={Home} />
                        </Switch>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
