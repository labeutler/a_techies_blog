const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


// Get Posts
// router.get('/', (req, res) => {
//     Post.findAll({
//         attributes: ["id", "comment", "title", "created_at"],
//         order: [
//             ["created_at", "DESC"]
//         ],
//         include: [{
//             model: User,
//             attributes: ["name"],
//         },
//         {
//             model: Comment,
//             attributes: ["id", "comment", "post_id", "userId", "created_at"],
//             include: {
//                 model: User,
//                 attributes: ["name"],
//             },
//         },
//     ],
//     })
//     .then((updateData) => res.json(updateData))
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// create a new post
router.post('/', withAuth, async (req, res) => {
    console.log("create a post")
    Post.create({
        ...body,
        userId: req.session.userId,
    })
    .then((newPost) => res.json(newPost))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    // const body = req.body;
    // try {
    //     const newPost = await Post.create({
    //         ...body,
    //         userId: req.session.userId,
    //     });
    //     res.json(newPost);
    // } catch (err) {
    //     res.status(400).json(err);
    // }
});

// update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const [updateData] = await Post.update(req.body, {
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
        const [updateData] =  
        Post.destroy({
            where: {
                id: req.params.id,
                // userId: req.session.userId,
            },
        });

        // .then((updateData) => {
        if (!updateData) {
            res.status(404).json({ message: 'Post not found with this ID.' });
            return;
        } else {
        // res.status(200).end();
        res.json(updateData);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;