//link twitter and spotify keys to file
var twitterKeys = require("./keys.js").twitterKeys;
var spotifyKeys = require("./keys.js").spotifyKeys;
var Twitter = require("twitter");
var Spotify = require("spotify");
var client = new Twitter(twitterKeys);
var fs = require("fs");
var nodeArgs = process.argv[2];
var params = {
	screen_name: "kel_alias",
	count: 20}; 

//retrieves last 20 tweets from my Twitter account
function myTweets() {
	client.get("statuses/user_timeline", params, function(error, tweets, response) {

		console.log(error);

		if (!error && response.statusCode == 200) {

		for (var i = 0; i < tweets.length; i++) {
			console.log(tweets[i].text);			
		}
		}
	});
}

// //retrieves data regarding user entered song
// function spotifyThisSong(song) {
	
// } 
// //data that will be retrieved from the spotify api
// var song = function(artists, tracks, preview, album) {

// 	this.artists = data.artists;
// 	this.tracks = data.tracks;
// 	this.preview = data.preview;
// 	this.album = data.album;
// };
// //if user doesn't select a song, display data for "The Sign"
// 	if (song === undefined) {
//     	song = 'The Sign';
// 	}

//retrieves data regarding user entered movie
// function movieThis(movie) {

// 	var movieName = "";
// 	var request = require("request");

// 	request("http://www.omdbapi.com/?apikey=40e9cece&" + movieName + );
	
// }


// var movie = function(title, year, imbdRating, rottenTomatoesRating, country, language, plot, actors) {

// 	this.title = data.title;
// 	this.year = data.year;
// 	this.imbdRating = data.imbdRating;
// 	this.rottenTomatoesRating = data.rottenTomatoesRating;
// 	this.country = data.country;
// 	this.language = data.language;
// 	this.plot = data.plot;
// 	this.actors = data.actors;
// };
// //if user doesn't select a movie, display data for "Mr. Nobody"
// 	if (movie === undefined) {
//     	movie = 'Mr Nobody';
// 	}

//returns data from random.txt file
function doWhatItSays(random) {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}

		console.log(data);

		var dataArr = data.split(",");

		console.log(dataArr);
	});
}

//allows each specific function to run when called in node
switch (nodeArgs) {

    case 'my-tweets':
        myTweets();
        break;

    case 'spotify-this-song':
        spotifyThisSong();
        break;

    case 'movie-this':
        movieThis();
        break;

    case 'do-what-it-says':
        doWhatItSays();
        break;
}
