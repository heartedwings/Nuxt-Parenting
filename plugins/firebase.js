import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  projectId: "nuxt-parenting",
  apiKey: "AIzaSyBl4DqgdH2Kqu6HI6aG72JD-vEIlHbmCDI",
  authDomain: "nuxt-parenting.firebaseapp.com",
  storageBucket: "nuxt-parenting.appspot.com",
  messagingSenderId: "1089551005975",
  appId: "1:1089551005975:web:7842fb8157337031839f52",
  measurementId: "G-SDPN9LLSGB"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
export const auth = firebase.auth()
