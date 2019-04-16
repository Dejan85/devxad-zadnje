const Projects = require("../models/index");

exports.postedById = (req, res, next, id) => {
    Projects.findById(id)
        .populate("postedBy", "_id name")
        .exec((err, post) => {
            if (err || !post) {
                return res.status(400).json({
                    error: err
                })
            }
            req.post = post
            next();
        })
}

exports.isPoster = (req, res, next) => {
    const isPoster = req.post && req.auth && req.post.postedById._id === req.auth._id
    if (!isPoster) {
        return res.status(403).json({
            error: "User is not authorized"
        })
    }
    next();
}