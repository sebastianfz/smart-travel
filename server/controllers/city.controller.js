// src/controllers/main.js
import City from '../models/city'; // Import the Todo model so we can query the DB

let cityController = {

    getAllCities: (req, res) => {
        City.find({}, (err, cities) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(cities);
        });
    },

    getTopCities: (req, res) => {
        City.find({}).limit(5).exec((err, cities) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(cities);
        })
    },

    getCity: (req, res) => {
        City.findOne({ _id: req.params.id }, (err, city) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(city);
        });
    },

    addCity: (req, res) => {
        console.log(req.city);
        let city = new City(req.body);
        city.save({
            text: req.body.text,
            done: false
        }, (err, city) => {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    saveCity: (data, id) => {
        City.update({
            _id: id
        }, { $set: data }, (err, city) => {
            if (err) {
                return res.send(err);
            }
            res.json(city);
        });
    },

    updateCity: (req, res) => {
        let id = req.params.id;
        let data = req.body;
        saveCity(data, id);
    },

    deleteCity: (req, res) => {
        City.findOne({ _id: req.params.id }, (err, city) => {
            if (err) {
                return res.send(err);
            }
            city.isActive = false;
            saveCity(data, req.params.id);
        });
    }
}

export default cityController;