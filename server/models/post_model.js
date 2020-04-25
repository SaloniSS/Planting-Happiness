const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    likesCount: {
        type: Number,
        default: 0
    },
    category: {
        type: String
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);