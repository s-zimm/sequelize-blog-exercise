const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.route('/blog')
    .post((req, res) => {
        // console.log(req.body)
        Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId
        })
        .then(newPost => {
            res.redirect(`/blog/${newPost.id}`);
        });
    })
    .get((req, res) => {
        Post.findAll()
            .then((allPosts) => {
    
                const posties = allPosts.map(p => {
                    if (p.content === null) {
                        p.content = 'No content found';
                    }
                    return {
                        title: p.title,
                        content: p.content.substring(0, 500) + '...',
                        id: p.id
                    }
                });
                res.render('blog-list', {
                    posts: posties
                });
            });
    })
    .delete((req, res) => {
        // Post.destroy({
        //     where: {

        //     }
        // })
    });

router.route('/blog/new')
    .get((req, res) => {
        res.render('blog-form', {
            // Leave blank
        });
    });

router.route('/blog/:id/edit')
    .get((req, res) => {
       Post.findOne({
            where: {
                id: req.params.id
            }
       }).then(result => {
            console.log(result);
            res.render('post-edit', {
               title: result.title,
               content: result.content,
               id: result.id
            })
            // return result.save({
            //     fields: ['title', 'content']
            // });
        });
    })
    .post((req, res) => {
        Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(result => {
            result.update({
                title: req.body.title,
                content: req.body.content
            }
            ).then(updated => {
                res.render(`post-success`, {
                    title: updated.title,
                    content: updated.content
                });
            })
        })
    })

router.route('/blog/:id')
    .get((req, res) => {
        Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.render('blog-single', {
                title: result.title,
                content: result.content,
                id: result.id
            });
        }); 
    })

module.exports = router;