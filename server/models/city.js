import mongoose from 'mongoose';

let citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    imagePath: {
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
export default mongoose.model('City', citySchema);

