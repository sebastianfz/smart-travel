
import { Router } from 'express';
import city from './city';
import user from './user';
import feedback from './feedback';

import place from './favourite-place';

export default () => {
    let api = Router();



    api.use('/city', city());
    api.use('/user', user());
    api.use('/places', place());
    api.use('/feedback', feedback());

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({ name: 'Smart-travel' });
    });



    return api;
}
