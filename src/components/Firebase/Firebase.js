import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXesBPAaU4GPN_AbUjgUO18tEm1BrwAX0",
      authDomain: "fackbook-messenger-rajkumar.firebaseapp.com",
      projectId: "fackbook-messenger-rajkumar",
      storageBucket: "fackbook-messenger-rajkumar.appspot.com",
      messagingSenderId: "571279374627",
      appId: "1:571279374627:web:a962c68ac0513d3c26f496",
      measurementId: "G-M4EGC63LFV"
});

const db = firebaseApp.firestore();

export default db;
