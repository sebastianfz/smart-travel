'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _city = require('../models/city');

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import the Todo model so we can query the DB

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
        _city2.default.find({}).limit(5).exec(function (err, cities) {
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
        console.log(req.city);
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
        saveCity(data, id);
    },

    deleteCity: function deleteCity(req, res) {
        _city2.default.findOne({ _id: req.params.id }, function (err, city) {
            if (err) {
                return res.send(err);
            }
            city.isActive = false;
            saveCity(data, req.params.id);
        });
    }
}; // src/controllers/main.js
exports.default = cityController;
//# sourceMappingURL=city.controller.js.map