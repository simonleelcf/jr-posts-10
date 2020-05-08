const express = require('express');
const {addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById} = require("../controllers/posts");
const validateId = require('../middleware/validatedId');

const router = express.Router();

router.get('', getAllPost);
router.get('/:id', validateId, getPostById);
router.put('/:id', validateId,updatePostById);
router.post('', addPost);
router.delete('/:id', validateId,deletePostById);

module.exports = router;