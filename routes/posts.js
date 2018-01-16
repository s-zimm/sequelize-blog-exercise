const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.route('/blog')
    .post((req, res) => {
        Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId
        })
        .then(res.send('Data sent!'));
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