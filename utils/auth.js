//Require Authorization for using site
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect("/login");
    } else {
        next();
    }
};
module.exports = withAuth;