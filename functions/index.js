const functions = require('./app/lib/firebase').functions;
const serve = require('./app/middleware/express');

exports.serve = functions.https.onRequest(serve);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
