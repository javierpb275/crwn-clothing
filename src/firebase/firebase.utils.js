import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCYav3RIviP4j6PlnWGaVG5OuNmOmEwdsU",
    authDomain: "crwn-db-752d3.firebaseapp.com",
    databaseURL: "https://crwn-db-752d3.firebaseio.com",
    projectId: "crwn-db-752d3",
    storageBucket: "crwn-db-752d3.appspot.com",
    messagingSenderId: "701917379366",
    appId: "1:701917379366:web:d889d0e750ae1d50da5fe7",
    measurementId: "G-7L7QJY8HMP"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;














