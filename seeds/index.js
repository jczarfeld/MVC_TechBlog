const seedComment = require('./comms-seeds');
const seedPost = require('./posts-seeds');
const seedUser = require('./users-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({
        force: true
    });
    await seedPost();
    await seedComment();
    await seedUser();
    process.exit(0);
};

seedAll();