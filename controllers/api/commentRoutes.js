const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
// router.get('/', (req, res) => {
//     Comment.findAll()
//         .then((commentData) => res.json(commentData))
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// create a new comment
router.post('/', withAuth, (req, res) => {

        const body = req.body; 
        Comment.create({
            ...body,
            userId: req.session.userId,
        })
        // res.json(commentData);
        .then((newComment) => res.json(newComment))
        .catch((err) => {
        res.status(400).json(err);
    });
});


module.exports = router;