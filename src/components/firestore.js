import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCrSGNAxF-RGkDyBelkEn8C8HO6d2uy_Uw",
    authDomain: "axis-stats.firebaseapp.com",
    databaseURL: "https://axis-stats.firebaseio.com",
    projectId: "axis-stats",
    storageBucket: "axis-stats.appspot.com",
    messagingSenderId: "102831339140",
    appId: "1:102831339140:web:cf6502bea6284c7039b4d1",
  };
firebase.initializeApp(config);
export default firebase;