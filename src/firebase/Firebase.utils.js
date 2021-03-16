import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4wAzQWKAqUDb87YtVP5bu07Y8qcnXZlc",
  authDomain: "lighthouse-clothing.firebaseapp.com",
  projectId: "lighthouse-clothing",
  storageBucket: "lighthouse-clothing.appspot.com",
  messagingSenderId: "895768054597",
  appId: "1:895768054597:web:c61ad9f6744949a1d3cc2c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, db, signInWithGoogle };
