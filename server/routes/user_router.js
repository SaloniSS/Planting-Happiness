const express = require('express');
const router = express.Router();
const { getUser, addUser, deleteUser, updateUser} = require('../controller/user_controller');

router
    .route('/')
    .get(getUser)
    .post(addUser);

router
    .route('/:id')
    .delete(deleteUser)
    .patch(updateUser);

    
module.exports = router;