require("dotenv").config();
var axios = require("axios");

var fs = require("fs");

// var keys = require("keys.js")

var Spotify = require("node-spotify-api");

// var spotify = new Spotify(keys.spotify);
var spotify = new Spotify({
    id: "077f5777d2a9493c97f27d5ead7158f6",
    secret: "ce16f8abd38f41c2950187f4b4cf3c81",
});

var OMDBapiKey = "a2c1af5a";

var command = process.argv[2];
var target = process.argv[3];

console.log(command, target);

function search() {
    if (command === "concert-this") {

    }
    else if (command === "spotify-this-song") {
        spotify.search({
                type: "track",
                query: target,
                limit: 1
            }).then(function (data, err) {
                console.log(data, "test");
                
            }).catch(function(err){
                console.log(err)
            })
    }
    else if (command === "movie-this") {
        axios.get("http://www.omdbapi.com/?t=" + target +  "apikey=" + OMDBapiKey + "&").then(function(response){
            console.log(response)
        })
    }
    else if (command === "do-what-it-says") {
        fs.readFile(random.txt, data, function(){
            console.log(data)
        })
    } else {
        console.log("Please enter a valid command")
    }
};

search();