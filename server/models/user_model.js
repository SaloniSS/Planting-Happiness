const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please add a username']
    },
    profilePic: {
        type: String,
        default: "Default Picture"
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