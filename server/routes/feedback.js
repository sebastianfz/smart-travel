
import { Router } from 'express';
import feedbackController from '../controllers/feedback.controller';


export default () => {
    let api = Router();


    // perhaps expose some API metadata at the root
    api.get('/', feedbackController.getFeedbacks);
    api.post('/', feedbackController.addFeedback);

    return api;
}
