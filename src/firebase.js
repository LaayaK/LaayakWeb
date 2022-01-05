import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
//   paste your keys here!!!
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
apiKey: "AIzaSyAp6rZ0XK7NyWzQvvruSix0roInsegv8y0",
authDomain: "laayak-80ddb.firebaseapp.com",
databaseURL: "https://laayak-80ddb-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "laayak-80ddb",
storageBucket: "laayak-80ddb.appspot.com",
messagingSenderId: "837859423973",
appId: "1:837859423973:web:2ffb0a75ce88d53734860c",
measurementId: "G-JZT83NFHX0"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
