'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _city = require('./city');

var _city2 = _interopRequireDefault(_city);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _feedback = require('./feedback');

var _feedback2 = _interopRequireDefault(_feedback);

var _favouritePlace = require('./favourite-place');

var _favouritePlace2 = _interopRequireDefault(_favouritePlace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var api = (0, _express.Router)();

    api.use('/city', (0, _city2.default)());
    api.use('/user', (0, _user2.default)());
    api.use('/places', (0, _favouritePlace2.default)());
    api.use('/feedback', (0, _feedback2.default)());

    // perhaps expose some API metadata at the root
    api.get('/', function (req, res) {
        res.json({ name: 'Smart-travel' });
    });

    return api;
};
//# sourceMappingURL=index.js.map