//const User = require('../models/user_model');

exports.getUser = async (req, res, next) => {
    
    res.send('GET users');
}

exports.addUser = async (req, res, next) => {
    res.send('POST users');
}

exports.deleteUser = async (req, res, next) => {
    res.send('DELETE user');
}

exports.updateUser = async (req, res, next) => {
    res.send('PATCH user');
}