const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


// create a new post
router.post('/', withAuth, (req, res) => {
    console.log("create a post")
    const body = req.body;
    Post.create({
        ...body,
        userId: req.session.userId,
    })
    .then((newPost) => res.json(newPost))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!affectedRows) {
            res.status(404).json({ message: 'Post not updated.' });
            return;
        }
        res.status(200).json(affectedRows);
    } catch (err) {
        res.status(500).json(err);
    }
    })

// delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] =  
        Post.destroy({
            where: {
                id: req.params.id,
                // userId: req.session.userId,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;