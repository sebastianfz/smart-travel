import mongoose from 'mongoose';

let feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    comments: {
        type: String,
        trim: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }

});
// Expose the model so that it can be imported and used in the controller (to search, delete, etc)
export default mongoose.model('Feedback', feedbackSchema);

