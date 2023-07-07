import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyCQUSmLaHwfeW9K0N3d9V1nCrh3K3FvkXk",
    authDomain: "nearmed-f06b6.firebaseapp.com",
    projectId: "nearmed-f06b6",
    storageBucket: "nearmed-f06b6.appspot.com",
    messagingSenderId: "45714594768",
    appId: "1:45714594768:web:22d583f6a83d8adb70b7d5",
    measurementId: "G-RCH1SGYGBP"
};

if(!firebase.getApp.length) {
    firebase.initializeApp(clientCredentials);
}

export default firebase;