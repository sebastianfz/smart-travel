'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _favouritePlace = require('../controllers/favourite-place.controller');

var _favouritePlace2 = _interopRequireDefault(_favouritePlace);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = require('express-jwt');

exports.default = function () {
    var api = (0, _express.Router)();

    var authCheck = jwt({
        secret: _config2.default.auth0.secretKey,
        audience: _config2.default.auth0.clientKey
    });

    // perhaps expose some API metadata at the root
    api.get('/', _favouritePlace2.default.getFavouritePlaces);
    api.get('/:email', authCheck, _favouritePlace2.default.getFavouritePlace);
    api.post('/', authCheck, _favouritePlace2.default.addFavouritePlace);
    api.put('/:id', authCheck, _favouritePlace2.default.updateFavouritePlace);
    api.delete('/:id', authCheck, _favouritePlace2.default.deleteFavouritePlace);

    return api;
};
//# sourceMappingURL=favourite-place.js.map