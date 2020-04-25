const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);