import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  getfirestore: firestoreReducer,
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;
