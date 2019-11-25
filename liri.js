require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
const axios = require("axios");

 
const operation = process.argv[2];
let input = "Frozen";
let queryUrl;

switch(operation){
    case "movie-this": 
        queryUrl= `http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=${process.env.OMDB_API_KEY}`;
        getMovieInfo();
        break;
}

function getMovieInfo(){

    axios.get(queryUrl).then(function(response){
        console.log(response);
//         * Title of the movie.
    console.log(`------------------------`);    
    console.log(`Title: ${response.data.Title}`);
    console.log(`------------------------`); 

//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.

    }).catch(function(error){
        console.log(error);

    });


}