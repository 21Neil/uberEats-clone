import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAY0n-HBAvZqsbtil5Iy4bEhGiNe-rXn6k",
    authDomain: "ubereats-clone-602f9.firebaseapp.com",
    projectId: "ubereats-clone-602f9",
    storageBucket: "ubereats-clone-602f9.appspot.com",
    messagingSenderId: "481348021853",
    appId: "1:481348021853:web:a3031a1241c87baaa827b4"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;