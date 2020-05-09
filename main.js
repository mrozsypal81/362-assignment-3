
"use strict"

//Object for the main app function that runs on a webpage
function Main(portval) {
    "use strict"

    const express = require("express");

    // Needed to parse the request body
    const bodyParser = require("body-parser");
    const app     = express();
    app.set('view engine','ejs'); //this is needed to use ejs
    app.listen(portval);

    app.use(bodyParser.urlencoded({ extended: true }));

    // Handles the sending of the index
    app.post("/", function(req, res){
	
	    res.sendFile(__dirname + "/index.html");
    });
    app.get("/", function(req, res){
	
	    res.sendFile(__dirname + "/index.html");
    });


    //Will perform a search in linked databases based on what user inputs
    // will search through users past searches and bring up most relevant or close distance matches
    app.post("/usersearch", function(req, res) {

    let inputstring = req.body["search"];
    console.log("Inside Main.js");
    console.log(inputstring);
    res.render("map",{inputstring});
    });

    //will bring up the userprofile so that the user can edit or view information about themselves
    app.post("/userprofile" ,function(req,res) {

    });

    //will handle all user chat between user and friends
    app.post("/userchat" ,function(req,res) {

    });


}



    
    let appinstance = new Main(3000);