import { all } from "redux-saga/effects";
import * as initial from "./initial";
import * as world from "./world";

function* Sagas() {
    yield all([
        initial.watcherSaga(),
        world.watcherSaga(),
    ]);
}

export default Sagas;