import { LOAD_PERSONS_LIST, UPDATE_PERSONS_LIST } from "../../utility/constants";

const INITIAL_STATE = {
    list: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_PERSONS_LIST:
            return { ...state };
        case UPDATE_PERSONS_LIST:
            return { ...state, list: action.payload };
        default:
            return state;
    }
}

export default reducer;