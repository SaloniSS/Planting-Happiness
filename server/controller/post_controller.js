const Post = require('../models/post_model');

exports.getPost = async (req, res, next) => {    
    try {
        const posts = await Post.find();

        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addPost = async (req, res, next) => {
    try {
        const { userName, profilePic, user_id, image, description, likesCount, category } = req.body;

        const post = await Post.create(req.body);

        return res.status(201).json({
            success: true,
            data: post
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.deletePost = async (req, res, next) => {
    try {

        const { userName, profilePic, _userId, image, description, likesCount, category } = req.body;

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                success: false,
                error: 'No post found'
            });
        }

        await post.remove();

        return res.status(200).json({
            success: true,
            data: post
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getPostByUser = async (req, res, next) => {
    try {

        const post = await Post.find({}).where({ "user_id": req.params.id});

        if(!post){
            return res.status(404).json({
                success: false,
                error: 'No post found'
            });
        }

        return res.status(200).json({
            success: true,
            data: post
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getPostByUserDay = async (req, res, next) => {
    try {

        const post = await Post.find({}).where({ "user_id": req.params.id, "date_added": {"$gte": req.params.dateStart + 'T00:00:00.000Z', "$lt":  req.params.dateStart + 'T23:59:59.999Z'}});


        if(!post){
            return res.status(404).json({
                success: false,
                error: 'No post found'
            });
        }

        return res.status(200).json({
            success: true,
            data: post
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

/* exports.updatePost = async (req, res, next) => {
    res.send('PATCH post');
} */