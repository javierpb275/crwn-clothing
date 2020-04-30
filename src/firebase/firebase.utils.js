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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
    
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.title);
      console.log(newDocRef);
      batch.set(newDocRef, obj);
    });

    return await batch.commit();

  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;














