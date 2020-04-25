const express = require('express');
const router = express.Router();
const { getUser, addUser, deleteUser, updateUser, getUserById} = require('../controller/user_controller');

router
    .route('/')
    .get(getUser)
    .post(addUser);

router
    .route('/:id')
    .delete(deleteUser)
    .get(getUserById)
    .patch(updateUser);

    
module.exports = router;