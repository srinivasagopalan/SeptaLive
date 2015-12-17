var express = require("express");
var http = require('http');
var app = express();
 
 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('index.html')
 });
 
app.get("/tracking", function(req, res) { 

    // HTTP GET request
    http.get('http://www3.septa.org/hackathon/TransitViewAll/', function(response){
    var body = '';

    response.on('data', function(chunk){
        body += chunk;
    });

    response.on('end', function(){
        var trackJson = JSON.parse(body);
        res.send(trackJson);
    });
}).on('error', function(e){
      console.log("Error = : ", e);
});
});
 
 var port = process.env.PORT || 8080;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });