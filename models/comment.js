const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');
const Post = require('./Post');

const Comment_ = sequelize.define('comment', {
    content: {
        type: Sequelize.STRING
    }
});

Comment_.belongsTo(User)
Comment_.belongsTo(Post);

// Comment_.sync()
//     .then(() => {
//         console.log('Created comment table');
//     });

module.exports = Comment_;