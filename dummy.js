const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment');

// let userSeth = User.create({
//     firstname: 'Seth',
//     lastname: 'Zimmerman'
// });

// let userDev = User.create({
//     firstname: 'Devin',
//     lastname: 'Pascoe'
// });

// let post1 = Post.create({
//     title: 'The title of the post!',
//     content: 'This is the content and OH MAN is it good how good is it????'
// });

// User.findOne({
//     where: {
//         lastname: 'Pascoe'
//     }
// }).then(author => {
//     Post
//     .create({
//         title: 'Post by Devin SWEET',
//         content: 'Dev is writing this post hooray!!!'
//     })
//     .then(post => {
//         post.setUser(author);
//         post.save();
//     });
// });

// Post.findOne({
//     where: {
//         postId: 1
//     }
// }).then(post => {
//     Comment.create({
//         content: "This is a comment on a post!"
//     });
// });