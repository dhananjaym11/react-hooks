import { LOAD_USERS_INIT, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../../utility/constants";

const loadUsersInit = () => ({
    type: LOAD_USERS_INIT,
    loading: true,
    payload: null
});

const loadUsersSuccess = (payload) => ({
    type: LOAD_USERS_SUCCESS,
    loading: false,
    payload
});

const loadUsersFailed = (err) => ({
    type: LOAD_USERS_ERROR,
    loading: false,
    error: err
});

export { loadUsersInit, loadUsersSuccess, loadUsersFailed };