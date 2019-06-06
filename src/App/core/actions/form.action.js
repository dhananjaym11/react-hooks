import { LOAD_PERSONS_LIST, UPDATE_PERSONS_LIST } from "../../utility/constants";

const loadPersonsList = () => ({
    type: LOAD_PERSONS_LIST,
    payload: null
});

const updatePersons = (payload) => ({
    type: UPDATE_PERSONS_LIST,
    payload: payload
});

export { loadPersonsList, updatePersons };