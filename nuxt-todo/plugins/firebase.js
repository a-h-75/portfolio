import firebase from 'firebase'

const config = {
  projectId: process.env.FTREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
