
import { Router } from 'express';
import city from './city';

export default () => {
    let api = Router();


    api.use('/city', city());
    // perhaps expose some API metadata at the root


    return api;
}
