/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyC12G2sumHQBVkiVw3dbqz7_DweiAkfFaI",
    authDomain: "expense-tracker-pwa-947f8.firebaseapp.com",
    projectId: "expense-tracker-pwa-947f8",
    storageBucket: "expense-tracker-pwa-947f8.appspot.com",
    messagingSenderId: "1093578804170",
    appId: "1:1093578804170:web:ed9fa9bcb76df0e9d41d33"
})

firebase.messaging();
