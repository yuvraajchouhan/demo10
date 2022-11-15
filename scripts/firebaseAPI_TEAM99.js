//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDFsFt-RAhJ-0OJyYAdzJEsoUc7yv6Z3Oc",
    authDomain: "comp1800-36683.firebaseapp.com",
    projectId: "comp1800-36683",
    storageBucket: "comp1800-36683.appspot.com",
    messagingSenderId: "293770588653",
    appId: "1:293770588653:web:7f8e02ecfbf9bab199f7e4"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
