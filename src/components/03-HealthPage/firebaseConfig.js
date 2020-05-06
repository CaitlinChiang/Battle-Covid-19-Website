import * as firebase from 'firebase'


const firebaseConfig = {
	apiKey: "AIzaSyA8kTnG1u5pxbiM6PzJT_-ctOfKeRDqSCo",
    authDomain: "battle-covid-19.firebaseapp.com",
    databaseURL: "https://battle-covid-19.firebaseio.com",

    projectId: "battle-covid-19",
    storageBucket: "battle-covid-19.appspot.com",
    messagingSenderId: "207879731520",
    appId: "1:207879731520:web:287211e03a8170b2de62a5",
    measurementId: "G-SE7NZ5SF01"
}

firebase.initializeApp(firebaseConfig)

export default firebase