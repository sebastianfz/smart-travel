// src/controllers/main.js
import Feedback from '../models/feedback'; // Import the Todo model so we can query the DB


let feedbackController = {

    getFeedbacks: (req, res) => {
        Feedback.find({ isActive: true }, (err, result) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send todos in JSON format
            res.json(result);
        });
    },

    addFeedback: (req, res) => {
        let feedback = new Feedback(req.body);
        feedback.save((err, feedback) => {
            if (err) {
                return res.send(err);
            }
            res.json(feedback);
        });
    }

}

export default feedbackController;