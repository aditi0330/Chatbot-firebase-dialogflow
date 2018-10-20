const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => 
 {
 
    response.send("Hello from Firebase!");
 
});


exports.helloWorld2 = functions.https.onRequest((request, response) => 
{

   response.send("Hello 2 from Firebase!");

});


exports.helloWorld3 = functions.https.onRequest((request, response) => 
{

   response.send("Hello 3 from Firebase!");

});
