const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;