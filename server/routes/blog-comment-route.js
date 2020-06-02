const express = require('express');
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = express.Router();

const blogCommentController = require('../controller/blogCommentController');

router.post('/addComment', isAuthenticated, blogCommentController.addComment);

router.get('/findAll', isAuthenticated, blogCommentController.findAll);

module.exports = router;