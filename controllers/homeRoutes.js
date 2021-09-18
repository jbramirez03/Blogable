const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogsRawData = await Blog.findAll({
            include: [{
                model: User,
                attributes: ['username']
            },
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

        const blogs = blogsRawData.map(blog => blog.get({ plain: true }));
        // res.json(blogs)
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        if (err) {
            res.json(err);
        }
    }
});

router.get('/blog/:id', withAuth, async (req, res) => {
    try {
        const blogRawData = await Blog.findByPk(req.params.id,
            {
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Comment,
                        attributes: ['comment_text', 'date_created'],
                        include: [
                            { model: User, attributes: ['username'] }
                        ]
                    }
                ]
            });

        if (!blogRawData) {
            res.status(404).json({ message: 'No blog found with that id.' });
            return;
        }

        const blog = blogRawData.get({ plain: true });
        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        if (err) {
            res.status(500).json(err);
        }
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', async (req, res) => {
    if (!req.session.logged_in) {
        res.render('signup');
        return;
    }

    res.redirect('/');
});

router.get('/post', withAuth, async (req, res) => {
    res.render('post-blog', {
        logged_in: req.session.logged_in
    });
});



module.exports = router;