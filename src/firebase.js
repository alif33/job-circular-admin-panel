import firebase from 'firebase'
// import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCuz7gZs8aAaukv1MKAng3JHDUpKvPQqQk",
    authDomain: "jobcircular-a4e2d.firebaseapp.com",
    databaseURL: "https://jobcircular-a4e2d.firebaseio.com",
    projectId: "jobcircular-a4e2d",
    storageBucket: "jobcircular-a4e2d.appspot.com",
    messagingSenderId: "180705402227",
    appId: "1:180705402227:web:c9351cfdb4fde473f8f906",
    measurementId: "G-PS9TD2Z6ZZ"
  };

firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage()

export default firebase