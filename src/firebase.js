import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDFJylzqnyWOND6F-cuvyldHcinRS5LzFE",
    authDomain: "hi-reactjs.firebaseapp.com",
    databaseURL: "https://hi-reactjs.firebaseio.com",
    projectId: "hi-reactjs",
    storageBucket: "hi-reactjs.appspot.com",
    messagingSenderId: "526033398780",
    appId: "1:526033398780:web:66affc8b6fdd7a154ee079",
    measurementId: "G-4XPTB10N49"
};

function firebaseInit() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebaseInit;
