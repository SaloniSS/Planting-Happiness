const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    image: {
        type: String
    },
    points: {
        type: Number
    },
    age: {
        type: Number
    },
    goal: {
        type: String
    },
    friends: [
        UserSchema.Types.ObjectId
    ],
    activity_log: [
    {
        activity: {
        type: String
        },
        date: {
            type: Date,
            default: 0
        },
        time: {
            type: Number
        },
        count: {
            type: Number
        },
        dateAdded: {
            type: Date,
            default: Date.now
        }
    }
]
});

module.exports = mongoose.model('User', UserSchema);