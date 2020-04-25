const express = require('express');
const router = express.Router();
const { getPost, addPost, deletePost} = require('../controller/post_controller');

router
    .route('/')
    .get(getPost)
    .post(addPost);

/* router
    .route('/')
    .patch(updatePost);
 */
router
    .route('/')
    .delete(deletePost);

    
module.exports = router;