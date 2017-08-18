
import { Router } from 'express';
import cityController from '../controllers/city.controller';

export default () => {
    let api = Router();
    // perhaps expose some API metadata at the root
    api.get('/', cityController.getAllCities);
    api.get('/top', cityController.getTopCities);
    api.get('/:id', cityController.getCity);
    api.post('/', cityController.addCity);
    api.put('/:id', cityController.updateCity);
    api.delete('/:id', cityController.deleteCity);
    api.get('/citydetails/:city', cityController.getCityDetails);
    api.get('/placedetails/:placeid', cityController.getPlaceDetails);

    return api;
}
