import {createActions, createReducer} from "reduxsauce";

export const { Creators, Types } = createActions({
    requestInitial: ["language"],
    requestInitialSuccess: ["payload", "isLoading"],
    requestInitialFail: ["error", "isLoading"]
});

const INITIAL_STATE = {
    isLoading: false,
    background: "",
    language: "",
    mock: {},
};

const requestInitial = (state) => ({
    ...state,
    isLoading: true,
});

const requestInitialSuccess = (state, { payload: { background, language, mock } }) => ({
    ...state,
    background,
    language,
    mock
});

const requestInitialFail = (state, error) => ({
    ...state,
    error,
    isLoading: false,
});

export default createReducer(INITIAL_STATE, {
    [Types.REQUEST_INITIAL]: requestInitial,
    [Types.REQUEST_INITIAL_SUCCESS]: requestInitialSuccess,
    [Types.REQUEST_INITIAL_FAIL]: requestInitialFail,
});