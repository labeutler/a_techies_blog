const router = require('express').Router();
const { User } = require('../../models');

//creating a new a new user
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username
            req.session.logged_in = true;

            res.status(200).json(newUser);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//user logging in
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: { where: req.body.username,
            }, 
        });
        if (!user) {
            res
            .status(400)
            .json({ message: 'Incorrect login, please try again.' });
            return;
        }
        const validPassword = await user.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400)
            .json({ message: 'Incorrect login, please try again.' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.username = user.username;
            req.session.logged_in = true;

            res.json({ user: user, message: 'You have successfully logged in.' });
        });
        
    } catch (err) {
        res.status(400).json({ message: 'Please create account, no user found.' });
    }
});

router.post('/logout', (req, res) => {
    if (req.session.looged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;