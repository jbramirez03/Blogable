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
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const blogs = (await userBlogs).map(blog => blog.get({ plain: true }));
        res.render('dashboard', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;