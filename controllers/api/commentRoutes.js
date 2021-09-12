const router = require('express').Router();
const { Comment, User } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const commentsRawData = await Comment.findAll({
            where: {
                blog_id: req.params.id
            },
            include: [{
                model: User,
                attributes: ['username']
            }]
        });

        const comments = commentsRawData.map(comment => comment.get({plain: true}));
        res.json(comments);
    } catch (err) {
        if(err){
            res.json(err);
        }
    }
});

module.exports = router;