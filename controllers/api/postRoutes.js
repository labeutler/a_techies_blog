const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// create a new post
router.post('/', withAuth, async (req, res) => {
    const description = req.description;
    try {
        const newPost = await Post.create({
            ...description,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const [updateData] = await Post.update(req.description, {
            where: {
                id: req.params.id,
            },
        });
        if (!updateData) {
            res.status(404).json({ message: 'Post not updated.' });
            return;
        }
        res.status(200).json(updateData);
    } catch (err) {
        res.status(500).json(err);
    }
    })

// delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'Post not found with this ID.' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;