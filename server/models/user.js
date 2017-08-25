import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    email_verified: {
        type: Boolean
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    clientID: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        trim: true
    },
    user_id: {
        type: String,
        required: true,
        trim: true
    },
    nickname: {
        type: String,
        trim: true
    },
    identities: {
        type: Array,
        default: []
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    global_client_id: {
        type: String
    }
});
// Expose the model so that it can be imported and used in the controller (to search, delete, etc)
export default mongoose.model('User', userSchema);

