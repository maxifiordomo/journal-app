import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAoi-IbGIYLEEmCxkKLkAUtL_TaQwSRuKE",
    authDomain: "react-app-cursos-d2f92.firebaseapp.com",
    projectId: "react-app-cursos-d2f92",
    storageBucket: "react-app-cursos-d2f92.appspot.com",
    messagingSenderId: "77525309136",
    appId: "1:77525309136:web:b72a60edc4d3ccc7f830d5"
};

firebase.initializeApp(firebaseConfig);

//esto es la referencia a firestore
const db = firebase.firestore();
//esta va a ser la autenticacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}