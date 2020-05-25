const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/search', userController.getAllUsers);
router.post('/create', userController.createUser);

router.get('/:userId', userController.getUserById);
router.post('/:userId', userController.editUser);
router.delete('/:userId', userController.deleteUser);

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