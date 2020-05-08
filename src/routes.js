const express = require('express');
const postRoute = require('./routes/posts');

const router = express.Router();

router.use('/posts', postRoute)

module.exports = router;