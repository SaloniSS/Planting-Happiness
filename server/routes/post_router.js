const express = require('express');
const router = express.Router();
const { getPost, addPost, deletePost, getPostByUser, getPostByUserDay} = require('../controller/post_controller');

router
    .route('/')
    .get(getPost)
    .post(addPost);

/* router
    .route('/')
    .patch(updatePost);
 */
router
    .route('/:id')
    .get(getPostByUser)
    .delete(deletePost);

router
    .route('/:id/:dateStart')
    .get(getPostByUserDay)

    
module.exports = router;