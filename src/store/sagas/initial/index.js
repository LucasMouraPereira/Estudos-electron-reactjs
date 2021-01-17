import { takeLatest, put } from "redux-saga/effects";
import { Types as Actions } from "../../ducks/initial";
import initialData from "../../../data/mocks/initialData";

function* requestInitial({ language }) {
    try {
        const data = {
            "en-us": {
                background: initialData.initialImage,
                language: language,
                mock: initialData.english,
            },
            "pt-br": {
                background: initialData.initialImage,
                language: language,
                mock: initialData.portuguese,
            },
            "es-es": {
                background: initialData.initialImage,
                language: language,
                mock: initialData.spanish
            }
        };

        const payload = data[language] || { language: language, data: {} };
        yield put({
            type: Actions.REQUEST_INITIAL_SUCCESS,
            payload,
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