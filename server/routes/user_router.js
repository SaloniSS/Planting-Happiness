const express = require('express');
const router = express.Router();
const { getUser, addUser, deleteUser, updateUser} = require('../controller/user_controller');

router
    .route('/')
    .get(getUser)
    .post(addUser);

router
    .route('/')
    .patch(updateUser);

router
    .route('/:id')
    .delete(deleteUser);

    
module.exports = router;