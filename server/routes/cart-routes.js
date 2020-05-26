const express = require('express');

const router = express.Router();

const cartController = require('../controller/cartController');

router.post('/add/:bookId', cartController.addToCart);

router.get('/', cartController.getCart);

router.delete('/:bookId', cartController.delete);

module.exports = router;