//const Post = require('../models/post_model');

exports.getPost = async (req, res, next) => {
    
    res.send('GET post');
}

exports.addPost = async (req, res, next) => {
    res.send('POST post');
}

exports.deletePost = async (req, res, next) => {
    res.send('DELETE post');
}

/* exports.updatePost = async (req, res, next) => {
    res.send('PATCH post');
} */