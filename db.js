const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-blog', 'sethzimmerman', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        
    }
})