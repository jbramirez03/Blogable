const {Blog} = require('../models');

const blogData = [
    {
        blog_name: 'test1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis iaculis dui quis suscipit.',
        user_id: 1
    },
    {
        blog_name: 'test2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis iaculis dui quis suscipit.',
        user_id: 1
    },
    {
        blog_name: 'test3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: 1
    },
    {
        blog_name: 'test4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: 1
    },
    {
        blog_name: 'test5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: 2
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;