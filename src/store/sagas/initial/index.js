import { takeLatest, put } from "redux-saga/effects";
import { Types as Actions } from "../../ducks/initial";
import initialData from "../../../data/mocks/initialData";

import api from '../../../server/api';

function* requestInitial() {
    try {
        console.log(api)
        const data = {
            mock: initialData,
        };
        yield put({
            type: Actions.REQUEST_INITIAL_SUCCESS,
            data,
        })
    } catch (err) {
        const { error } = err?.response?.data;
        yield put({
            type: Actions.REQUEST_INITIAL_FAIL,
            error,
        });
    }
}

export function* watcherSaga() {
    yield takeLatest(Actions.REQUEST_INITIAL, requestInitial);
}