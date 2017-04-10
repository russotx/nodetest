var request = require('request');
var express = require('express');
var app = express();
var admin = require("firebase-admin");

const http = require('http');  
const port = 3000;

/*
const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}  
    
const server = http.createServer(requestHandler)
*/

app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/logic'));


app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/public/test4-4.html');
  next();
}, function(req,res){
    res.sendFile(__dirname + '/logic/client.js');
});

app.listen(3000);

/*
server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }


  console.log(`server is listening on ${port}`)
})
*/


var API_KEY = "AIzaSyAwiUWpP21I3pAPdZExjgIj5ebtvFMjYrs"; // Your Firebase Cloud Messaging Server API key

// Initialize the app with a service account, granting admin privileges
var serviceAccount = require("/Users/Daniel/Projects/Bootcamp/nodetest/private/realtime-database-331a6-firebase-adminsdk-8a2d8-5f8b11dc59.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://realtime-database-331a6.firebaseio.com"
});

//ref = firebase.database().ref();

// authenticate with admin privileges
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var changed = false;
db.ref('/Volunteers/testVol2/').update({smsOpt:changed});


