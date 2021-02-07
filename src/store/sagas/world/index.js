import { takeLatest, put } from "redux-saga/effects";
import { Types as Actions } from "../../ducks/world";
import worldData from "../../../data/mocks/worldData";

function* requestWorld({ language }) {
    try {
        const data = {
            "en-us": {
                language: language,
                header: worldData.header,
                aside: worldData.aside,
                footer: worldData.footer
            },
            "pt-br": {
                language: language,
                header: worldData.header,
                aside: worldData.aside,
                footer: worldData.footer
            },
            "es-es": {
                language: language,
                header: worldData.header,
                aside: worldData.aside,
                footer: worldData.footer
            }
        };
        const payload = data[language] || { language: language, data: {} };
        yield put({
            type: Actions.REQUEST_WORLD_SUCCESS,
            payload,
        })
    } catch (err) {
        const { error } = err?.response?.data;
        yield put({
            type: Actions.REQUEST_WORLD_FAIL,
            error,
        });
    }
}

export function* watcherSaga() {
    yield takeLatest(Actions.REQUEST_WORLD, requestWorld);
}