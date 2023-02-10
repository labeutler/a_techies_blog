const router = require('express').Router();
const { Comment } = require('../../models/');
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


router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.session.userId,
      });
      res.json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// create a new comment
// router.post('/', withAuth, (req, res) => {
//     if (req.session) {

//         Comment.create({
//             comment: req.body.comment,
//             // ...body,
//             postId: req.body.postId,
//             userId: req.session.userId,
//         })
//             // res.json(commentData);
//             .then((newComment) => res.json(newComment))
//             .catch((err) => {
//                 res.status(400).json(err);
//         });
//     }
// });


module.exports = router;