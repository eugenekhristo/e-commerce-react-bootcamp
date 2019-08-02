import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDsCSVCaL9AIHw4tXUvYg9dZ-3yHdHGjKw',
  authDomain: 'e-commerce-react-bootcam-56fce.firebaseapp.com',
  databaseURL: 'https://e-commerce-react-bootcam-56fce.firebaseio.com',
  projectId: 'e-commerce-react-bootcam-56fce',
  storageBucket: '',
  messagingSenderId: '343730797496',
  appId: '1:343730797496:web:19221de4d182d921'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
