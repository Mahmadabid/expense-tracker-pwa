import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwZyyw7t3Fwuh1X0gj_dlgq32Svg__DaU",
    authDomain: "quiz-app-c9b01.firebaseapp.com",
    projectId: "quiz-app-c9b01",
    storageBucket: "quiz-app-c9b01.appspot.com",
    messagingSenderId: "760961848403",
    appId: "1:760961848403:web:b3615d8a360c8c4c3662a6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;