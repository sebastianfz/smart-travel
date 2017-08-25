"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    "port": 8080,
    "bodyLimit": "100kb",
    "corsHeaders": ["Link"],
    "sessionSecret": "smarttravel",
    "sessionCollection": "sessions",
    "db": "mongodb://admin:admin@ds163698.mlab.com:63698/smart-travel",
    "googlekey": 'AIzaSyAduOLW-YfvIWSgXaUIJITwfHufHqKjenY',
    "googlePlaceSearch": "https://maps.googleapis.com/maps/api/place/textsearch/json?",
    "googlePlaceDetails": "https://maps.googleapis.com/maps/api/place/details/json?",
    "auth0": {
        secretKey: 'C03mi-7qL95irszaEtWl7BiiIDyrD6iGYMf5Me_tJ4kl4JWbNBqf-mtC1HvgwimI',
        clientKey: 'dZBxG6Z-Tzw1dQUt4E6aF4idqW1NqZZ-'
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map