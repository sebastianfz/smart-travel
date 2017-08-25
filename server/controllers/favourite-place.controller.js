// src/controllers/main.js
import FavouritePlace from '../models/favourite-place'; // Import the Todo model so we can query the DB
import config from '../config/config';


let favouritePlaceController = {

    getFavouritePlaces: (req, res) => {
        FavouritePlace.find({ isActive: true }, (err, result) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(result);
        });
    },

    getFavouritePlace: (req, res) => {
        FavouritePlace.find({ email: req.params.email, isActive: true }, (err, favouritePlace) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(favouritePlace || []);
        });
    },

    addFavouritePlace: (req, res) => {
        let favouritePlace = new FavouritePlace(req.body);
        favouritePlace.save((err, favouritePlace) => {
            if (err) {
                return res.send(err);
            }
            res.json(favouritePlace);
        });
    },

    updateFavouritePlace: (req, res) => {
        let id = req.params.id;
        let data = req.body;
        FavouritePlace.update({
            _id: id
        }, { $set: data }, (err, favouritePlace) => {
            if (err) {
                return res.send(err);
            }
            res.json(favouritePlace);
        });
    },

    deleteFavouritePlace: (req, res) => {
        FavouritePlace.findOne({ _id: req.params.id }, (err, favouritePlace) => {
            if (err) {
                return res.send(err);
            }
            favouritePlace.isActive = false;
            FavouritePlace.update({
                _id: req.params.id
            }, { $set: favouritePlace }, (err, favouritePlace) => {
                if (err) {
                    return res.send(err);
                }
                res.json(favouritePlace);
            });
        });
    }
}

export default favouritePlaceController;