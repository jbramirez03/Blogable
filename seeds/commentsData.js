const { Comment } = require('../models');

const commentsData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis neque, vitae posuere diam. Donec enim ligula, gravida id risus ac, fringilla suscipit ante. Donec vel metus nec eros faucibus facilisis eu ut purus.',
        user_id: 1,
        blog_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis neque, vitae posuere diam. Donec enim ligula, gravida id risus ac, fringilla suscipit ante. Donec vel metus nec eros faucibus facilisis eu ut purus.',
        user_id: 2,
        blog_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mollis neque, vitae posuere diam. Donec enim ligula, gravida id risus ac, fringilla suscipit ante. Donec vel metus nec eros faucibus facilisis eu ut purus.',
        user_id: 3,
        blog_id: 2
    }
]

const seedComment = () => Comment.bulkCreate(commentsData);

module.exports = seedComment;