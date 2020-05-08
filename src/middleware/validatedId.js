const postModel = require('../models/post');

module.exports = function(req, res, next) {
    let {id} = req.params;
    const numberedId = Number(id);
    if(!postModel.doesIdExist(numberedId)) {
        return res.status(404).json({error: "not found"});
    }
    req.params.id = numberedId;
    next();
}