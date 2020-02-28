import firebase from 'firebase';
import 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDnldqMkiiODo_JcdyKpmLX1tmjMd6CZeo',
  authDomain: 'volunteiapp.firebaseapp.com',
  databaseURL: 'https://volunteiapp.firebaseio.com',
  projectId: 'volunteiapp',
  storageBucket: 'volunteiapp.appspot.com',
  messagingSenderId: '303560472334',
  appId: '1:303560472334:web:e446a566aa4af541aa495f',
  measurementId: 'G-R4JWNRG184',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
