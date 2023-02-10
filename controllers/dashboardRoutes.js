const router = require('express').Router();
const { Post } = require('../models/');
//Requiring to be logged in to complete
const withAuth = require('../utils/auth');

//Router needs to GET ALL data
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId,
            },
        });
        // Data needs to be serialized so it can be read
        const posts = postData.map((post) => post.get({
            plain: true
        }));
        console.log(posts);
        res.render('admin', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/newPost', withAuth, (req, res) => {
    res.render('newPost', {
        layout: 'dashboard',
    });
});

// GET ONE post to edit
router.get('/editPost/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id); 
   
        
        if (postData) {
            const post = postData.get({ plain: true });
        res.render('editPost', { 
            layout: 'dashboard', 
            post,
        });
        } else {
            //If unable to locate the file
           res.status(404).end() ;
        }
    } catch (err) {
        //General error
        res.redirect('login');
    }
});

module.exports = router;