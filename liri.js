require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
const axios = require("axios");

 
const operation = process.argv[2];
let input = "Frozen";
let queryUrl= `http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`;

switch(operation){
    case "movie-this":
        
        getMovieInfo();
        break;
}

function getMovieInfo(){

    axios.get(queryUrl).then(function(reposnse){
        console.log(reposnse);

    }).catch(function(error){
        console.log(error);

    });


}