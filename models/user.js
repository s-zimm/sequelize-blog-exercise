const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    }
});

// User.sync()
//     .then(() => {
//         console.log('Created user table')
//     });

module.exports = User;