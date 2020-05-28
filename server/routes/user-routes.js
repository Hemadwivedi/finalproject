const express = require('express');
const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

const userController = require('../controller/userController');

router.get('/search', isAuthenticated, userController.getAllUsers);
router.post('/create', userController.createUser);

router.get('/:userId', isAuthenticated, userController.getUserById);
router.post('/:userId', isAuthenticated, userController.editUser);
router.delete('/:userId', isAuthenticated, userController.deleteUser);

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({user: req.user})
    } else {
        res.json({user: null})
    }
});

module.exports = router;