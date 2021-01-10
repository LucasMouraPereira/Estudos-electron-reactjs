import { all } from "redux-saga/effects";
import * as initial from "./initial";

function* Sagas() {
    yield all([
        initial.watcherSaga(),
    ]);
}

export default Sagas;