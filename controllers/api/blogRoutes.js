const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            blog_name: req.body.blog_name,
            description: req.body.description,
            user_id: req.session.user_id
        });

        res.status(400).json(newBlog);
    } catch (err) {
        if(err){
            res.status(500).json(err);
        }
    }
});

router.delete('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });

        if(!blogData){
            res.status(404).json({message: 'No blog found with that id.'});
            return;
        }
        
        res.status(400).json(blogData);
    } catch (err) {
        if(err){
            res.status(500).json(err);
        }
    }
});

module.exports = router;