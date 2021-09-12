const sequelize = require('../config/connection');
const seedBlog = require('./blogsData');
const seedComment = require('./commentsData');
const seedUser = require('./usersData');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedUser();

        await seedBlog();

        await seedComment();

        process.exit();
    } catch (err) {
        if(err){
            throw err;
        }
    }
};

seedAll();