'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _city = require('../controllers/city.controller');

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var api = (0, _express.Router)();
    // perhaps expose some API metadata at the root
    api.get('/', _city2.default.getAllCities);
    api.get('/top', _city2.default.getTopCities);
    api.get('/:id', _city2.default.getCity);
    api.post('/', _city2.default.addCity);
    api.put('/:id', _city2.default.updateCity);
    api.delete('/:id', _city2.default.deleteCity);
    api.get('/citydetails/:city', _city2.default.getCityDetails);
    api.get('/placedetails/:placeid', _city2.default.getPlaceDetails);

    return api;
};
//# sourceMappingURL=city.js.map