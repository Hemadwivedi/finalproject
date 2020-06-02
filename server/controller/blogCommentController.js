var db = require("../models");

exports.findAll = (req, res, next) => {
    db.BlogComment.findAll().then(data => {
        console.log('this db from data!!', data);
        console.log('we hit hit comment get route!!');
        return res.json(data)
    });
};

exports.addComment = (req, res, next) => {
    db.BlogComment.create(req.body).then((dataFromDb) => {
        console.log('we hit hit comment post route!!', req.body)
        return res.json(dataFromDb)
    })
};