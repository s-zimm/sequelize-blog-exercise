const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-blog', 'sethzimmerman', '', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;

sequelize
    .authenticate()
    .then(() => console.log(`\nWe're connected!\n`))
    .catch((err) => console.log(`\nUH OH! There was an error:`, err));


const Posts = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER,

        references: {
            model: Users,

            key: 'id'
        }
    }
});

Users.sync( {force: true} )
    .then(() => {
        return Users.create({
            firstName: 'Seth',
            lastName: 'Zimmerman'
        });
    });


