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


module.exports = router;