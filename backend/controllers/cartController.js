const CartItem = require('../models/cartItem');

// Obtém todos os itens do carrinho
const getAllCartItens = async (req, res) => {
    try {
        const items = await CartItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  };

// Adiciona um item ao carrinho
const addCartItens = async (req, res) => {
    const { productId, quantity, price } = req.body;

    try {
        const newItem = new CartItem({
            productId,
            quantity,
            price
        });

        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
}
  };

// Remove um item do carrinho
const removeCartItens = async (req, res) => {
    const { id } = req.params;

    try {
        const removedItem = await CartItem.findByIdAndDelete(id);

        if (!removedItem) {
            return res.status(404).json({ message: 'Item não encontrado' });
        }

        res.json({ message: 'Item removido com sucesso', removedItem });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  };

  module.exports = {
    getAllCartItens,
    addCartItens,
    removeCartItens
  };