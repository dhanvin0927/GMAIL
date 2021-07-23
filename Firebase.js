import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAqKqXqhNDkQ-S2ZaV8xJPC5UhBCprdBM",
    authDomain: "clone-186ba.firebaseapp.com",
    projectId: "clone-186ba",
    storageBucket: "clone-186ba.appspot.com",
    messagingSenderId: "304554867431",
    appId: "1:304554867431:web:73237f9a98a2a331370042"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };