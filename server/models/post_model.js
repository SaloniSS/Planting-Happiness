const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'No User']
    },
    userName: {
        type: String,
        required: [true, 'Please add a userName']
    },
    profilePic: {
        type: String,
        required: [true, 'Please add a profile picture']
    },
    image: {
        type: String,
        required: [true, 'Please add an image']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    likesCount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: [true, 'Please choose a category']
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);