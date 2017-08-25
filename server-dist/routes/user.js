'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _user = require('../controllers/user.controller');

var _user2 = _interopRequireDefault(_user);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = require('express-jwt');

exports.default = function () {
    var api = (0, _express.Router)();

    var authCheck = jwt({
        secret: new Buffer(_config2.default.auth0.secretKey, 'base64'),
        audience: _config2.default.auth0.clientKey
    });

    // perhaps expose some API metadata at the root
    api.get('/', _user2.default.getUsers);
    api.get('/:email', authCheck, _user2.default.getUser);
    api.post('/', _user2.default.addUser);
    api.put('/:email', _user2.default.updateUser);

    return api;
};
//# sourceMappingURL=user.js.map