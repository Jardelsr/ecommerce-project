const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getAllCartItens); // Obter todos os itens no carrinho
router.post('/add', cartController.addCartItens); // Adicionar item ao carrinho
router.delete('/:id', cartController.removeCartItens); // Remover item do carrinho

module.exports = router;