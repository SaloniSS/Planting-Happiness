const User = require('../models/user_model');

exports.getUser = async (req, res, next) => {
    
    try {
        const users = await User.find();

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getUserById = async (req, res, next) => {
    
    try {
        const user = await User.find({}).where({ "googleID": req.params.id});

        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addUser = async (req, res, next) => {
    try {
        const {  googleID, userName, friends, profilePic, points, goal, activity_log } = req.body;

        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
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

exports.deleteUser = async (req, res, next) => {
    try {

        const {  googleID, userName, profilePic, points, goal, activity_log } = req.body;

        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        await user.remove();

        return res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.updateUser = async (req, res, next) => {
    try {

        const { userName, friends, profilePic, points, goal, activity_log } = req.body;

        const user = await User.find({}).where({ "googleID": req.params.id});

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        if(req.body.userName != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    userName: req.body.userName
                } 
            });
        }
        if(req.body.friends != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    friends: req.body.friends
                } 
            });
        }
        if(req.body.profilePic != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    profilePic: req.body.profilePic
                } 
            });
        }
        if(req.body.points != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    points: req.body.points
                } 
            });
        }
        if(req.body.goal != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    goal: req.body.goal
                } 
            });
        }
        if(req.body.activity_log != null) {
            await User.find({}).where({ "googleID": req.params.id}).replaceOne({}, { 
                $set: { 
                    activity_log: req.body.activity_log
                } 
            });
        }


        return res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}