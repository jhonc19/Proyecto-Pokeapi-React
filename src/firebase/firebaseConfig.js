import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAYaP9Ez0zpO3uSQAXiE298V3c57juES1E',
  authDomain: 'pokedex-react-proyecto.firebaseapp.com',
  projectId: 'pokedex-react-proyecto',
  storageBucket: 'pokedex-react-proyecto.appspot.com',
  messagingSenderId: '607203350355',
  appId: '1:607203350355:web:38f06cad0fbe5d98b633a6',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
