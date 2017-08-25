'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _feedback = require('../models/feedback');

var _feedback2 = _interopRequireDefault(_feedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import the Todo model so we can query the DB


var feedbackController = {

    getFeedbacks: function getFeedbacks(req, res) {
        _feedback2.default.find({ isActive: true }, function (err, result) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(result);
        });
    },

    addFeedback: function addFeedback(req, res) {
        var feedback = new _feedback2.default(req.body);
        feedback.save(function (err, feedback) {
            if (err) {
                return res.send(err);
            }
            res.json(feedback);
        });
    }

}; // src/controllers/main.js
exports.default = feedbackController;
//# sourceMappingURL=feedback.controller.js.map