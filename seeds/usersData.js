const {User} = require('../models');

const userData = [
    {
        username: 'jason',
        password: 'secretpassword'
    },
    {
        username: 'emma',
        password: 'secretpassword2'
    },
    {
        username: 'josh',
        password: 'secretpassword3'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;