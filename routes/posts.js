const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.route('/blog')
    .post((req, res) => {
        debugger;
        res.send('post')
    })
    .get((req, res) => {
        Post.findAll()
            .then((allPosts) => {
                res.send(allPosts);
            });
    })
    .delete((req, res) => {
        res.send('Delete')
    });

module.exports = router;