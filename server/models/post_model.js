const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    _userId: Schema.Types.ObjectId,
    image: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Post', PostSchema);