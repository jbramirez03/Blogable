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
                attributes: ['comment_text', 'user_id', 'date_created']
            }
            ]
        });

        const blogs = blogsRawData.map(blog => blog.get({ plain: true }));
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

router.get('/blog/:id', async (req, res) => {
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
                        attributes: ['comment_text', 'user_id', 'date_created']
                    }
                ]
            });

            if(!blogRawData){
                res.status(404).json({message: 'No blog found with that id.'});
                return;
            }

            const blog = blogRawData.get({plain: true});
            res.render('blog', {
                ...blog,
                logged_in: req.session.logged_in
            });
    } catch (err) {
        if(err){
            res.status(500).json(err);
        }
    }
});



module.exports = router;