import {createActions, createReducer} from "reduxsauce";

export const { Creators, Types } = createActions({
    requestInitial: [],
    requestInitialSuccess: ["payload", "isLoading"],
    requestInitialFail: ["error", "isLoading"]
});

const INITIAL_STATE = {
    isLoading: false,
    mock: {},
};

const requestInitial = () => ({
    ...INITIAL_STATE,
    isLoading: true,
});

const requestInitialSuccess = (state, { data }) => ({
    ...state,
    mock: data.mock
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