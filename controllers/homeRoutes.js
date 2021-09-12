const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/blogs', async (req, res) => {
    try {
        const blogsRawData = await Blog.findAll();

        const blogs = blogsRawData.map(blog => blog.get({ plain: true }));
        console.log(blogs);
        res.render('homepage', { blogs });
    } catch (err) {
        if(err){
            res.json(err);
        }
    }
});

module.exports = router;