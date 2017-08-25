
import { Router } from 'express';
import favouritePlaceController from '../controllers/favourite-place.controller';

var jwt = require('express-jwt');
import config from '../config/config';

export default () => {
    let api = Router();

    let authCheck = jwt({
        secret: config.auth0.secretKey,
        audience: config.auth0.clientKey
    });

    // perhaps expose some API metadata at the root
    api.get('/', favouritePlaceController.getFavouritePlaces);
    api.get('/:email', authCheck, favouritePlaceController.getFavouritePlace);
    api.post('/', authCheck, favouritePlaceController.addFavouritePlace);
    api.put('/:id', authCheck, favouritePlaceController.updateFavouritePlace);
    api.delete('/:id', authCheck, favouritePlaceController.deleteFavouritePlace);

    return api;
}
