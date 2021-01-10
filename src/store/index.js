import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import Reducers from "./ducks";
import Sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,
];

const enhancer = applyMiddleware (...middlewares);
const store = createStore(Reducers, enhancer);

sagaMiddleware.run(Sagas);

export default store;