const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogsRawData = await Blog.findAll({
            include: [{
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment_text', 'user_id']
            }
            ]
        });

        const blogs = blogsRawData.map(blog => blog.get({ plain: true }));
        res.json(blogs);
    } catch (err) {
        if (err) {
            res.json(err);
        }
    }
});

module.exports = router;