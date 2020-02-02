// Initialize standard libraries
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var https = require('https');
var app = express();

// Configuring Express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Basic - listening for incoming requests
var listener = app.listen(process.env.PORT, process.env.IP, function () {
    console.log("server has started listening to port " + listener.address().port);
});

// Route 1: default
app.get("/", function (req, res) {
    res.send('<h1>Ian\'s IT8303 Lab4 Webpage!</h1>');
});


// Route 2: Firebase GET
app.get("/career_guidance/:title", function (req, res) {
    console.log("Route 2 Firebase-Browser activated");

    // Read query parameter from URL via Request.params
    var title = req.params.title.toLowerCase();
    console.log('Title queried:' + title);

    // Retrieve career JSON data from Firebase
    var ref = admin.database().ref("Description");
    console.log("Key: " + ref.key);

    // Iterate the JSON Object and identify the requested title
    var query = ref.orderByChild('Title').equalTo(title);

    query.on("child_added", function (snapshot) {
        console.log('Route 2 Child_added activated');

        var description = snapshot.val().description;
        console.log('Snapshot' + JSON.stringify(snapshot));

        res.send(JSON.stringify({ fulfillmentText: description }));
    });

    // TODO: Route 2b Firebase-POST

    // TODO: API for IEX


    app.get("/iex_test", function (req, res) {
        console.log('Route 3 IEX Test activated');

        var request = require('request');

        console.log('Testing AAPL JSON response');

        var URL = 'https://sandbox.iexapis.com/stable/stock/AAPL/quote?token=Tpk_9873d0cde66e4511bc771e86ffb9eb59';
        console.log('URL: ' + URL);

        request(URL, function (error, response, body) {
            console.log('Route 3a AAPL GET test activated');

            // parse the JSON object
            var obj = JSON.parse(body);
            var ticker = obj.symbol;
            var date = obj.date;
            var company_name = obj.companyName;
            var close = obj.close;
            var high = obj.high;

            console.log('Ticker: ' + ticker);
            console.log('Date: ' + date);
            console.log('Company Name: ' + company_name);
            console.log('Stock Close: ' + close);
            console.log('High: ' + high);

            let output = "[" + ticker + " Info]\nTicker: " + ticker + "\nDate: " + date + "\nCompany Name: " + company_name + "\nPrice - Close: " + close + "\nPrice - High: " + high
            res.send(JSON.stringify({ fulfillmentText: output }));
        });

        app.get("/iex/:ticker", function (req, res) {
            console.log('Route 4 IEX GET activated');

            var request = require('request');
            var ticker = req.params.ticker.toLowerCase();
            let iex_token = "pk_75ff3f8ea32642f9a8611043134080e4"
            var URL = 'https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=' + iex_token
            console.log('URL: ' + URL);
            console.log('Ticker: ' + ticker);
            console.log('Date: ' + date);
            console.log('Company Name: ' + company_name);
            console.log('Stock Close: ' + close);
            console.log('High: ' + high);
            request(URL, function (error, response, body) {
                console.log('Route 4a IEX callback activated');

                var obj = JSON.parse(body);
                let output = "[" + ticker + " Info]\nTicker: " + ticker + "\nDate: " + date + "\nCompany Name: " + company_name + "\nPrice - Close: " + close + "\nPrice - High: " + high
                res.send(JSON.stringify({ fulfillmentText: output }));
            });

        });