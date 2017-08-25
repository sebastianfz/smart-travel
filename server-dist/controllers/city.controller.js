'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _city = require('../models/city');

var _city2 = _interopRequireDefault(_city);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/controllers/main.js
var cityController = {

    getAllCities: function getAllCities(req, res) {
        _city2.default.find({}, function (err, cities) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(cities);
        });
    },

    getTopCities: function getTopCities(req, res) {
        _city2.default.find({}).limit(8).exec(function (err, cities) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(cities);
        });
    },

    getCity: function getCity(req, res) {
        _city2.default.findOne({ _id: req.params.id }, function (err, city) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(city);
        });
    },

    addCity: function addCity(req, res) {
        var city = new _city2.default(req.body);
        city.save({
            text: req.body.text,
            done: false
        }, function (err, city) {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    saveCity: function saveCity(data, id) {
        _city2.default.update({
            _id: id
        }, { $set: data }, function (err, city) {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    updateCity: function updateCity(req, res) {
        var id = req.params.id;
        var data = req.body;
        _city2.default.update({
            _id: id
        }, { $set: data }, function (err, city) {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    deleteCity: function deleteCity(req, res) {
        _city2.default.findOne({ _id: req.params.id }, function (err, city) {
            if (err) {
                return res.send(err);
            }
            city.isActive = false;
            _city2.default.update({
                _id: req.params.id
            }, { $set: city }, function (err, city) {
                if (err) {
                    return res.send(err);
                }
                res.json(city);
            });
        });
    },

    getCityDetails: function getCityDetails(req, res) {
        var key = _config2.default.googlekey;
        var city = encodeURIComponent(req.params.city);
        var http = require("https");
        var url = _config2.default.googlePlaceSearch + "key=" + key + "&query=" + city;
        http.get(url, function (response) {
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {
                var places = JSON.parse(body);
                res.json(places);
            });
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
            res.send(err);
        });
    },

    getPlaceDetails: function getPlaceDetails(req, res) {
        var key = _config2.default.googlekey;
        var placeId = encodeURIComponent(req.params.placeid);
        var http = require("https");
        var url = _config2.default.googlePlaceDetails + "key=" + key + "&placeid=" + placeId;
        http.get(url, function (response) {
            var body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {
                var places = JSON.parse(body);
                res.json(places);
            });
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
            res.send(err);
        });
    }
}; // Import the Todo model so we can query the DB
exports.default = cityController;
//# sourceMappingURL=city.controller.js.map