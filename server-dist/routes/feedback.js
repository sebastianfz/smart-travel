'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _feedback = require('../controllers/feedback.controller');

var _feedback2 = _interopRequireDefault(_feedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var api = (0, _express.Router)();

    // perhaps expose some API metadata at the root
    api.get('/', _feedback2.default.getFeedbacks);
    api.post('/', _feedback2.default.addFeedback);

    return api;
};
//# sourceMappingURL=feedback.js.map