const {Blog} = require('../models');

const blogData = [
    {
        blog_name: 'test1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu hendrerit sapien, in vehicula urna. Vivamus posuere, sem sed consequat molestie, est ante semper ligula, eu semper nunc nisl id metus. Quisque molestie lacinia purus at maximus. Vivamus ultricies sodales pretium. Integer id ornare leo. Fusce tellus lacus, iaculis eget bibendum eu, imperdiet a sapien. Integer sed turpis arcu. Vivamus consectetur, sapien sed dignissim efficitur, justo diam consequat sem, nec pellentesque velit enim vel risus.',
        user_id: 1
    },
    {
        blog_name: 'test2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu hendrerit sapien, in vehicula urna. Vivamus posuere, sem sed consequat molestie, est ante semper ligula, eu semper nunc nisl id metus. Quisque molestie lacinia purus at maximus. Vivamus ultricies sodales pretium. Integer id ornare leo. Fusce tellus lacus, iaculis eget bibendum eu, imperdiet a sapien. Integer sed turpis arcu. Vivamus consectetur, sapien sed dignissim efficitur, justo diam consequat sem, nec pellentesque velit enim vel risus.',
        user_id: 1
    },
    {
        blog_name: 'test3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu hendrerit sapien, in vehicula urna. Vivamus posuere, sem sed consequat molestie, est ante semper ligula, eu semper nunc nisl id metus. Quisque molestie lacinia purus at maximus. Vivamus ultricies sodales pretium. Integer id ornare leo. Fusce tellus lacus, iaculis eget bibendum eu, imperdiet a sapien. Integer sed turpis arcu. Vivamus consectetur, sapien sed dignissim efficitur, justo diam consequat sem, nec pellentesque velit enim vel risus.',
        user_id: 1
    },
    {
        blog_name: 'test4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu hendrerit sapien, in vehicula urna. Vivamus posuere, sem sed consequat molestie, est ante semper ligula, eu semper nunc nisl id metus. Quisque molestie lacinia purus at maximus. Vivamus ultricies sodales pretium. Integer id ornare leo. Fusce tellus lacus, iaculis eget bibendum eu, imperdiet a sapien. Integer sed turpis arcu. Vivamus consectetur, sapien sed dignissim efficitur, justo diam consequat sem, nec pellentesque velit enim vel risus.',
        user_id: 3
    },
    {
        blog_name: 'test5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu hendrerit sapien, in vehicula urna. Vivamus posuere, sem sed consequat molestie, est ante semper ligula, eu semper nunc nisl id metus. Quisque molestie lacinia purus at maximus. Vivamus ultricies sodales pretium. Integer id ornare leo. Fusce tellus lacus, iaculis eget bibendum eu, imperdiet a sapien. Integer sed turpis arcu. Vivamus consectetur, sapien sed dignissim efficitur, justo diam consequat sem, nec pellentesque velit enim vel risus.',
        user_id: 2
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;