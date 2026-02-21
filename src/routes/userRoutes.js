const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /users — create a user
router.post('/', userController.create);

// PUT /users/:id — update a user
router.put('/:id', userController.update);

module.exports = router;