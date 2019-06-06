import { LOAD_USERS_INIT, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../../utility/constants";

const INITIAL_STATE = {
    loading: false,
    error: null,
    result: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USERS_INIT:
            return { ...state, loading: action.loading };
        case LOAD_USERS_SUCCESS:
            return { ...state, result: action.payload, loading: action.loading };
        case LOAD_USERS_ERROR:
            return { ...state, error: action.error, loading: action.loading };
        default:
            return state;
    }
}

export default reducer;