const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const userBlogs = Blog.findAll({
            where: { user_id: req.session.user_id },
            include: [
                {
                    model: Comment,
                    attributes: ['comment_text', 'date_created'],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ]
                }
            ]
        });

        const blogs = (await userBlogs).map(blog => blog.get({ plain: true }));
        console.log(blogs);
        res.json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;