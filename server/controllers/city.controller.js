// src/controllers/main.js
import City from '../models/city'; // Import the Todo model so we can query the DB
import config from '../config/config';


let cityController = {

    getAllCities: (req, res) => {
        City.find({}, (err, cities) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(cities);
        });
    },

    getTopCities: (req, res) => {
        City.find({}).limit(8).exec((err, cities) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(cities);
        })
    },

    getCity: (req, res) => {
        City.findOne({ _id: req.params.id }, (err, city) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(city);
        });
    },

    addCity: (req, res) => {
        let city = new City(req.body);
        city.save({
            text: req.body.text,
            done: false
        }, (err, city) => {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    saveCity: (data, id) => {
        City.update({
            _id: id
        }, { $set: data }, (err, city) => {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    updateCity: (req, res) => {
        let id = req.params.id;
        let data = req.body;
        City.update({
            _id: id
        }, { $set: data }, (err, city) => {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    deleteCity: (req, res) => {
        City.findOne({ _id: req.params.id }, (err, city) => {
            if (err) {
                return res.send(err);
            }
            city.isActive = false;
            City.update({
                _id: req.params.id
            }, { $set: city }, (err, city) => {
                if (err) {
                    return res.send(err);
                }
                res.json(city);
            });
        });
    },

    getCityDetails: (req, res) => {
        let key = config.googlekey;
        let city = encodeURIComponent(req.params.city);
        var http = require("https");
        let url = config.googlePlaceSearch + "key=" + key + "&query=" + city;
        http.get(url, function (response) {
            let body = '';
            response.on('data', (chunk) => {
                body += chunk;
            });
            response.on('end', () => {
                let places = JSON.parse(body);
                res.json(places);
            });
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
            res.send(err);
        });
    },

    getPlaceDetails: (req, res) => {
        let key = config.googlekey;
        let placeId = encodeURIComponent(req.params.placeid);
        var http = require("https");
        let url = config.googlePlaceDetails + "key=" + key + "&placeid=" + placeId;
        http.get(url, function (response) {
            let body = '';
            response.on('data', (chunk) => {
                body += chunk;
            });
            response.on('end', () => {
                let places = JSON.parse(body);
                res.json(places);
            });
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
            res.send(err);
        });
    }
}

export default cityController;