const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

//Router needs to GET ALL data
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                User,
            ],
        });
        // Data needs to be serialized so it can be read
        const posts = postData.map((post) => post.get({
            plain: true
        }));
        res.render('all-posts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ONE post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        
        if (postData) {
            const post = postData.get({ plain: true });
        res.render('single-post', { post });
        } else {
            //If unable to locate the file
           res.status(404).end() ;
        }
    } catch (err) {
        //General error
        res.status(500).json(err);
    }
});

// If logging in 
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// If signing up
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});
module.exports = router;