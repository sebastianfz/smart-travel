
import { Router } from 'express';
import userController from '../controllers/user.controller';

var jwt = require('express-jwt');
import config from '../config/config';

export default () => {
    let api = Router();

    let authCheck = jwt({
        secret: new Buffer(config.auth0.secretKey, 'base64'),
        audience: config.auth0.clientKey
    });

    // perhaps expose some API metadata at the root
    api.get('/', userController.getUsers);
    api.get('/:email', authCheck, userController.getUser);
    api.post('/', userController.addUser);
    api.put('/:email', userController.updateUser);

    return api;
}
