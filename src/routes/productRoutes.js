const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// POST /products — create a product
router.post('/', productController.create);

// PUT /products/:id — update a product
router.put('/:id', productController.update);

module.exports = router;