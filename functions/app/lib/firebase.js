
const admin = require("firebase-admin");
const functions = require('firebase-functions');
const database = functions.database;
const storage = functions.storage;
const firestore = functions.firestore;
const auth = functions.auth;

const serviceAccount = require("./config/my-project-dbc6d-firebase-adminsdk-kyb8h-d9dfa78727.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-project-dbc6d.firebaseio.com"
});

const tools = {
    admin: admin,
    functions: functions,
    database: database,
    storage: storage,
    firestore: firestore,
    auth: auth
}

module.exports = tools;