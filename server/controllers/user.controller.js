// src/controllers/main.js
import User from '../models/user'; // Import the Todo model so we can query the DB


let userController = {

    getUsers: (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(users);
        });
    },

    getUser: (req, res) => {
        User.findOne({ email: req.params.email }, (err, user) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(user);
        });
    },

    addUser: (req, res) => {
        let tempUser = new User(req.body);
        User.findOne({ email: req.params.email }, (err, user) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            if (!user) {
                tempUser.save((err, user) => {
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

    updateUser: (req, res) => {
        let id = req.params.email;
        let data = req.body;
        User.update({
            email: email
        }, { $set: data }, (err, user) => {
            if (err) {
                return res.send(err);
            }
            res.json(user);
        });
    }

}

export default userController;