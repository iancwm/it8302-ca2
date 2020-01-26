/* Load the HTTP library */
var http = require("http");
var https = require('https');
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

/*Instantiate Spotify wrapper*/
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId: '49126add599b40ea8054131d343597be',
    clientSecret: 'e76c8f8505ec4aa5880627fd6cc9226b',
    redirectUri: 'http://www.example.com/callback'
});

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
        console.log('Artist albums', data.body);
    },
    function (err) {
        console.error(err);
    }
);