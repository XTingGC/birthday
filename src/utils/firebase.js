import firebase from 'firebase/app';

//datos para conectar app con firebase, se extrae de firebase
const firebaseConfig = {
    apiKey: "AIzaSyBugtuutaF2cu8zgWY3z4jxuRT8aizFANE",
    authDomain: "birthday-46429.firebaseapp.com",
    projectId: "birthday-46429",
    storageBucket: "birthday-46429.appspot.com",
    messagingSenderId: "914209234975",
    appId: "1:914209234975:web:ab01a9195c50377322352a"
};

// Initialize Firebase
//hay que tener el paquete de firebase instalado
//se exporta para poderlo usarlo en otros componentes sin meter todo el codigo de arriba
export default firebase.initializeApp(firebaseConfig);