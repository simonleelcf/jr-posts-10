const postModel = require("../models/post");

function addPost(req, res) {
    const {author, content} = req.body;
    const newPost = postModel.addPost({author, content});
    res.json(newPost);
}

function getAllPost(req, res) {
    res.json(postModel.getAllPost());
}

function getPostById(req, res) {
    const{id} = req.params;
    const post = postModel.getPostById(id);
    res.json(post);
}

function updatePostById(req, res) {
    const{id} = req.params;
    const{author, content} = req.body;
    const updatePost = postModel.updatePostById(id, {author, content});
    res.json(updatePost);
}

function deletePostById(req, res) {
    const{id} = req.params;
    const deletedPost = postModel.deletePostById(id);
    res.json(deletedPost);
}

module.exports = {
    addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById
}