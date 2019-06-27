
const serviceAccount = require("../config/my-project-dbc6d-firebase-adminsdk-kyb8h-d9dfa78727.json");

const admin = require("firebase-admin");
const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-project-dbc6d.firebaseio.com"
});

const functions = require('firebase-functions');

const auth = admin.auth();
const database = admin.database();
const firestore = admin.firestore();
const storage = admin.storage();

const tools = {
    auth: auth,
    database: database,
    firebase: firebase,
    firestore: firestore,
    functions: functions,
    storage: storage
}

module.exports = tools;