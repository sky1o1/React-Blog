import firebase from "firebase";
import 'firebase/firestore'
import "firebase/storage";
import "firebase/auth"

  var firebaseConfig = {
    apiKey: "AIzaSyDdV1QjGYDK39W6AihUNTbLU47Q-FUeqIY",
    authDomain: "demoapp-40b20.firebaseapp.com",
    databaseURL: "https://demoapp-40b20.firebaseio.com",
    projectId: "demoapp-40b20",
    storageBucket: "demoapp-40b20.appspot.com",
    messagingSenderId: "325998144331",
    appId: "1:325998144331:web:96e9d42eac7e46de2e16ce",
    measurementId: "G-DFRE1XNX1G"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const storage = firebase.storage();
  const storeFire = firebase.firestore();
  storeFire.settings({timestampsInSnapshots: true});
  const auth  = firebase.auth() 
  console.log('user data', auth.phoneNumber)
//   logout = () => {
//     firebase.auth().signOut();
// }
 

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { storage, storeFire, timestamp, firebase as default };