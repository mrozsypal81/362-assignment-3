"use strict"


//Object for the main app function that runs on a webpage
function Main(portval) {
    "use strict"

    const express = require("express");

    // Needed to parse the request body
    const bodyParser = require("body-parser");
    const app     = express();
    app.listen(portval);

    app.use(bodyParser.urlencoded({ extended: true }));

    // Handles the sending of the index
    app.post("/", function(req, res){
	
	    res.sendFile(__dirname + "/index.html");
    });
    app.get("/", function(req, res){
	
	    res.sendFile(__dirname + "/index.html");
    });



    app.post("/usersearch", function(req, res) {

    });

}



  
    let appinstance = new Main(3000);