'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import the Todo model so we can query the DB


var userController = {

    getUsers: function getUsers(req, res) {
        _user2.default.find({}, function (err, users) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(users);
        });
    },

    getUser: function getUser(req, res) {
        _user2.default.findOne({ email: req.params.email }, function (err, user) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(user);
        });
    },

    addUser: function addUser(req, res) {
        var tempUser = new _user2.default(req.body);
        _user2.default.findOne({ email: req.params.email }, function (err, user) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            if (!user) {
                tempUser.save(function (err, user) {
                    if (err) {
                        return res.send(err);
                    }
                    res.json(user);
                });
            } else {
                // Send todos in JSON format
                res.json(user);
            }
        });
    },

    updateUser: function updateUser(req, res) {
        var id = req.params.email;
        var data = req.body;
        _user2.default.update({
            email: email
        }, { $set: data }, function (err, user) {
            if (err) {
                return res.send(err);
            }
            res.json(user);
        });
    }

}; // src/controllers/main.js
exports.default = userController;
//# sourceMappingURL=user.controller.js.map