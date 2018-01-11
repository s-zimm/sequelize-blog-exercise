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

User.sync()
    .then(() => {
        return User.create({
            firstname: 'Seth',
            lastname: 'Zimmerman'
        });
    });

module.exports = User;