'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _city = require('./city');

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var api = (0, _express.Router)();

    api.use('/city', (0, _city2.default)());
    // perhaps expose some API metadata at the root


    return api;
};
//# sourceMappingURL=index.js.map