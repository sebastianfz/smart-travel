'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _favouritePlace = require('../models/favourite-place');

var _favouritePlace2 = _interopRequireDefault(_favouritePlace);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/controllers/main.js
var favouritePlaceController = {

    getFavouritePlaces: function getFavouritePlaces(req, res) {
        _favouritePlace2.default.find({ isActive: true }, function (err, result) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(result);
        });
    },

    getFavouritePlace: function getFavouritePlace(req, res) {
        _favouritePlace2.default.find({ email: req.params.email, isActive: true }, function (err, favouritePlace) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(favouritePlace || []);
        });
    },

    addFavouritePlace: function addFavouritePlace(req, res) {
        var favouritePlace = new _favouritePlace2.default(req.body);
        favouritePlace.save(function (err, favouritePlace) {
            if (err) {
                return res.send(err);
            }
            res.json(favouritePlace);
        });
    },

    updateFavouritePlace: function updateFavouritePlace(req, res) {
        var id = req.params.id;
        var data = req.body;
        _favouritePlace2.default.update({
            _id: id
        }, { $set: data }, function (err, favouritePlace) {
            if (err) {
                return res.send(err);
            }
            res.json(favouritePlace);
        });
    },

    deleteFavouritePlace: function deleteFavouritePlace(req, res) {
        _favouritePlace2.default.findOne({ _id: req.params.id }, function (err, favouritePlace) {
            if (err) {
                return res.send(err);
            }
            favouritePlace.isActive = false;
            _favouritePlace2.default.update({
                _id: req.params.id
            }, { $set: favouritePlace }, function (err, favouritePlace) {
                if (err) {
                    return res.send(err);
                }
                res.json(favouritePlace);
            });
        });
    }
}; // Import the Todo model so we can query the DB
exports.default = favouritePlaceController;
//# sourceMappingURL=favourite-place.controller.js.map