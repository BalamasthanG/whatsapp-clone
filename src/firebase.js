import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAxbU1prIpHEmFoSni843Uw5T5fERPzGs",
  authDomain: "whatsapp-clone-bmg.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-bmg.firebaseio.com",
  projectId: "whatsapp-clone-bmg",
  storageBucket: "whatsapp-clone-bmg.appspot.com",
  messagingSenderId: "1027965270647",
  appId: "1:1027965270647:web:cd7cfb03870b8e60ac2472",
  measurementId: "G-N7NSQHM9M2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
