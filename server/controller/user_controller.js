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

exports.addUser = async (req, res, next) => {
    try {
        const { userName, friends, profilePic, points, goal, activity_log } = req.body;

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

        const { userName, profilePic, points, goal, activity_log } = req.body;

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

        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        user.userName = req.body.userName;
        user.friends = req.body.friends;
        user.profilePic = req.body.profilePic;
        user.points = req.body.points;
        user.goal = req.body.goal;
        user.activity_log = req.body.activity_log;
        user.save();

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