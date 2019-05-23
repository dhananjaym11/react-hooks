import { LOAD_USERS_INIT, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../../utility/constants";

const INITIAL_STATE = {
    error: null,
    result: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USERS_INIT:
            return { ...state };
        case LOAD_USERS_SUCCESS:
            return { ...state, result: action.response };
        case LOAD_USERS_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}

export default reducer;