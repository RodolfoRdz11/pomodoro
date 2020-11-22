import {createStore,applyMiddleware} from "redux";
import {routerMiddleware} from "connected-react-router";
import rootReducer, { RootState, history }  from "./rootReducer";
import rootSaga from "./rootSaga";
import {persistStore ,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "pomodoro-app",
    storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
