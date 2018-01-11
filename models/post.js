const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATEONLY
    },
    content: {
        type: Sequelize.TEXT
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
});

Post.sync()
    .then(() => {
        console.log('Post table created')
    });

module.exports = Post;