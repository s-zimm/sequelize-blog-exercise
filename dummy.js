const User = require('./models/user');
const Post = require('./models/post');

User.findOne({
    where: {
        id: 1
    }
}).then(author => {
    Post
    .create({
        title: 'AND ANOTHER!!',
        content: 'YEAAAHHHHHH EVEN MORE STUFFS IN A POST!!'
    })
    .then(post => {
        post.setUser(author);
        post.save();
    });
});
    