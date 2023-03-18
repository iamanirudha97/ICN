import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB0LcvBP2afYbRtpLSMjcCXMvPm9R7D394",
  authDomain: "indian-construction-network.firebaseapp.com",
  projectId: "indian-construction-network",
  storageBucket: "indian-construction-network.appspot.com",
  messagingSenderId: "378744985086",
  appId: "1:378744985086:web:9f9c4cd26981ce58f19caf"
};

// init firebase and services
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp, projectStorage}