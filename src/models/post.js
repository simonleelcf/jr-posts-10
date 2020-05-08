const posts = [];
let cureentId = 1;

function getAllPost() {
    return JSON.parse(JSON.stringify(posts));
}

function getPostById(id) {
    return posts.find((i) => i.id === id);
}

function addPost(post) {
    const {author, content} = post;
    const newPost = {author, content, id: cureentId++};
    posts.push(newPost);
    return newPost;
}

function updatePostById(id, newPost) {
    const post = posts.find((i) => i.id === id);
    const {author, content} = newPost;
    post.author = author;
    post.content = content;
    return post;
}

function deletePostById(id) {
    const postIndex = getPostIndexById(id);
    const deletePost = posts.splice(postIndex, 1);
    return deletePost;
}

function getPostIndexById(id) {
    return posts.findIndex((i) => i.id === id);
}

function doesIdExist(id) {
    return getPostIndexById(id) !== -1;
}

module.exports = {
    getAllPost,
    getPostById,
    addPost,
    updatePostById,
    deletePostById,
    getPostIndexById,
    doesIdExist
}