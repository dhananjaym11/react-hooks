import { LOAD_USERS_INIT, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../../utility/constants";

const loadUsersInit = () => ({
    type: LOAD_USERS_INIT,
    payload: null
});

const loadUsersSuccess = (response) => ({
    type: LOAD_USERS_SUCCESS,
    response
});

const loadUsersFailed = (err) => ({
    type: LOAD_USERS_ERROR,
    error: err
});

export { loadUsersInit, loadUsersSuccess, loadUsersFailed };