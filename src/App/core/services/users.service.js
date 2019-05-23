import axios from 'axios';
import { loadUsersInit, loadUsersSuccess, loadUsersFailed } from '../actions';

export default {
    loadUsers: () => {
        return (dispatch) => {
            dispatch(loadUsersInit())
            return axios.get('https://api.github.com/users?since=0')
                .then(response => dispatch(loadUsersSuccess(response.data)))
                .catch(err => dispatch(loadUsersFailed(err)))
        }
    }
}
