const Sequelize = require('sequelize');
const sequelize = require('../db');

const Users = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

module.exports = Users;