import { combineReducers } from 'redux';

import usersReducer from './users.reducer';
import formReducer from './form.reducer';

const rootReducer = combineReducers({
    usersReducer: usersReducer,
    formReducer: formReducer
});

export default rootReducer;