import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCTpM_hpWk4pjsoRa0VB_6Faa4RvLqMp5Q',
  authDomain: 'fair-gram.firebaseapp.com',
  projectId: 'fair-gram',
  storageBucket: 'fair-gram.appspot.com',
  messagingSenderId: '767820929632',
  appId: '1:767820929632:web:aea7a53e82acafec134105',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
