require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
const axios = require("axios");

 
const operation = process.argv[2];
let input = process.argv[3];
let queryUrl;

switch(operation){

    case "movie-this": 
        queryUrl= `http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=${process.env.OMDB_API_KEY}`;
        getMovieInfo();
        break;
    
    case "spotify-this-song":
        queryUrl = `https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx`;
        getSongInfo();
        break;

    case "concert-this":
        queryUrl = `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`;
        getConcertInfo();
        break;
}

function getMovieInfo(){

    axios.get(queryUrl).then(function(response){
        console.log(response);
//         * Title of the movie.
    console.log(`------------------------------------------------------------------------`);    
    console.log(`Title: ${response.data.Title}`);
   
//   * Year the movie came out.
    console.log(`------------------------------------------------------------------------`);     
    console.log(`Release Year: ${response.data.Year}`);
  
//   * IMDB Rating of the movie.
    console.log(`------------------------------------------------------------------------`);   
    console.log(`IMDB Rating: ${response.data.imdbRating}`);
  
//   * Country where the movie was produced.
    console.log(`------------------------------------------------------------------------`);   
    console.log(`Country: ${response.data.Country}`);
  
//   * Language of the movie.
    console.log(`------------------------------------------------------------------------`);      
    console.log(`Language: ${response.data.Language}`);
  
//   * Plot of the movie.
    console.log(`------------------------------------------------------------------------`);     
    console.log(`Plot: ${response.data.Plot}`);
  
//   * Actors in the movie.
    console.log(`------------------------------------------------------------------------`);      
    console.log(`Actors: ${response.data.Actors}`);
    console.log(`------------------------------------------------------------------------`);   

    }).catch(function(error){
        console.log(error);

    });
}

function getSongInfo(){
    spotify.search({ type: "track", query: input }, function(err, result) {
       

        if (err) {
            console.log(err);
        };

    console.log(result);
    console.log("Artist: " + result.tracks.items[0].artists[0].name);
    console.log("Song Title: " + result.tracks.items[0].name);
    console.log("Preview This Track: " + result.tracks.items[0].preview_url);
    console.log("Album: " + result.tracks.items[0].album.name);
 

});

}

function getConcertInfo(){
    axios.get(queryUrl).then(function(response){
        console.log(response);

    }).catch(function(error){
        console.log(error);
    })
}