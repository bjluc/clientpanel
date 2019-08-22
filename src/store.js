import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
//@todo

const firebaseConfig = {
  apiKey: 'AIzaSyC6M-_TmQ7hiVvq58bvqqe63GbKPphl8G4',
  authDomain: 'reactclientpanel-d09fc.firebaseapp.com',
  databaseURL: 'https://reactclientpanel-d09fc.firebaseio.com',
  projectId: 'reactclientpanel-d09fc',
  storageBucket: 'reactclientpanel-d09fc.appspot.com',
  messagingSenderId: '973304155482',
  appId: '1:973304155482:web:286461914347a30d'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

//  Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
