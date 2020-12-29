import firebase from "firebase";
import 'firebase/firestore'
import "firebase/storage";
import "firebase/auth"

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_APP_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const firebaseAnalytics = firebase.analytics();

const storage = firebase.storage();
const storeFire = firebase.firestore();
storeFire.settings({ timestampsInSnapshots: true });
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, storeFire, timestamp, firebase, firebaseConfig, firebaseAnalytics, auth as default, auth };