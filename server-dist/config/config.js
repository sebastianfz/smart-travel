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
    "googlekey": 'AIzaSyBEX3_eNswlhAPyrv5V5HBfXZyIItoKGso',
    "googlePlaceSearch": "https://maps.googleapis.com/maps/api/place/textsearch/json?",
    "googlePlaceDetails": "https://maps.googleapis.com/maps/api/place/details/json?"
};
exports.default = config;
//# sourceMappingURL=config.js.map