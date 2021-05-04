// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: 'AIzaSyCacQhGq-ytqBcCVtRW5VbLWoX1HWd3zGg',
  authDomain: 'qwitter-4ad9b.firebaseapp.com',
  projectId: 'qwitter-4ad9b',
  storageBucket: 'qwitter-4ad9b.appspot.com',
  messagingSenderId: '440590980512',
  appId: '1:440590980512:web:22a199b3d76b6e3fc140c5'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
