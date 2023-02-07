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
        res.render('all-posts-admin', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboar',
    });
});

// GET ONE post to edit
router.get('/edit/:id', withAuth, async (req, res) => {
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
        res.render('edit-post', { 
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