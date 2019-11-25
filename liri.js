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
    console.log(`------------------------------------------------------------------------`);    
    console.log(`Title: ${response.data.Title}`);
   // console.log(`------------------------`); 

//   * Year the movie came out.
console.log(`------------------------------------------------------------------------`);     
    console.log(`Release Year: ${response.data.Year}`);
   // console.log(`------------------------`);
//   * IMDB Rating of the movie.
console.log(`------------------------------------------------------------------------`);   
    console.log(`IMDB Rating: ${response.data.imdbRating}`);
  //  console.log(`------------------------`);
//   * Rotten Tomatoes Rating of the movie.
    //console.log(`------------------------`);    
    //console.log(`Rotten Tomatoes: ${response.data.Title}`);
    //console.log(`------------------------`);
//   * Country where the movie was produced.
console.log(`------------------------------------------------------------------------`);   
    console.log(`Country: ${response.data.Country}`);
  //  console.log(`------------------------`);
//   * Language of the movie.
console.log(`------------------------------------------------------------------------`);      
    console.log(`Language: ${response.data.Language}`);
  //  console.log(`------------------------`);
//   * Plot of the movie.
console.log(`------------------------------------------------------------------------`);     
    console.log(`Plot: ${response.data.Plot}`);
  //  console.log(`------------------------`);
//   * Actors in the movie.
console.log(`------------------------------------------------------------------------`);      
    console.log(`Actors: ${response.data.Actors}`);
    console.log(`------------------------------------------------------------------------`);   

    }).catch(function(error){
        console.log(error);

    });


}