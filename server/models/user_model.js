const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    image: {
        type: String
    },
    points: {
        type: Number,
        default: 0
    },
    goal: {
        type: String
    },
    friends: [
        mongoose.Schema.Types.ObjectId
    ],
    activity_log: [
        mongoose.Schema.Types.ObjectId  
    ],
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);