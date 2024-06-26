const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotas para CRUD de produtos
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/image-url/', productController.getImageUrl);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
