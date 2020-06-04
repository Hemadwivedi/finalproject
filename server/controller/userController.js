var db = require("../models");

exports.createUser = (req, res, next) => {
    db.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email
    }).then(response=>
        response.dataValues

    ).then(result => res.json(result))
        
    
};


exports.getAllUsers = (req, res, next) => {
    db.User.findAll()
        .then(users => users.map(user => user.dataValues))
        .then(result => res.json(result))
};

exports.getUserById = (req, res, next) => {
    db.User.findOne({
        where: {
            id: req.params.userId,
        }
    }).then(function (user) {
        if (user) {
            res.json(user.dataValues)
        } else {
            res.status(401).json("err");
        }

    });
};
exports.editUser = (req, res, next) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email

    };
    const selector = {
        where: {id: req.params.userId}
    };

    db.User.update(user, selector)
        .then(response=>{
           res.json(response) 
        }).catch(next);
};

exports.deleteUser = (req, res, next) => {
    const selector = {
        where: {id: req.params.userId}
    };
    db.User.destroy(selector).then(rowsUpdated=> {
        res.json(rowsUpdated);
    }).catch(next);


};

