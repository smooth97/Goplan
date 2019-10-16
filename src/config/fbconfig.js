import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCKu2RGp_tTiitKGIXGdULI61LQtW-i8RM',
  authDomain: 'goplan-810d7.firebaseapp.com',
  databaseURL: 'https://goplan-810d7.firebaseio.com',
  projectId: 'goplan-810d7',
  storageBucket: 'goplan-810d7.appspot.com',
  messagingSenderId: '242973590192',
  appId: '1:242973590192:web:5d5ab2ea086f210676b175',
  measurementId: 'G-BEYQ3EHBD6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
