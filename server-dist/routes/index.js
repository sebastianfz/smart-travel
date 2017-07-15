'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    // perhaps expose some API metadata at the root
    api.get('/', function (req, res) {
        res.json({ name: 'Smart-travel' });
    });

    return api;
};
//# sourceMappingURL=index.js.map