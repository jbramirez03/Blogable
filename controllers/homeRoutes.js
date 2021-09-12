const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

router.get('/blogs', async (req, res) => {
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

router.get('/blogs/:id', async (req, res) => {
    try {
        const blogRawData = await Blog.findByPk(req.params.id,
            {
                include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['comment_text', 'user_id']
                }]
            });

        const blog = blogRawData.get({ plain: true });
        res.json(blog);
    } catch (err) {
        if(err){
            res.status(500).json(err);
        }
    }
});


module.exports = router;