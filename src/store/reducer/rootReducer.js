import profile from './profile';
import auth from './authenticate'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    profile: profile,
    authenticate: auth,
    firestore: firestoreReducer
})

export default rootReducer;