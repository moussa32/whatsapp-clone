import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC7DJyEc6rPW4ZxKE8UV80pfCBMDzp1LzE",
  authDomain: "whatsapp-clone-cc25c.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cc25c.firebaseio.com",
  projectId: "whatsapp-clone-cc25c",
  storageBucket: "whatsapp-clone-cc25c.appspot.com",
  messagingSenderId: "553373298050",
  appId: "1:553373298050:web:2c0db17a57a449c400b39b",
  measurementId: "G-T82F7YN2FP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
