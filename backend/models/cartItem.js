const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('CartItem', cartItemSchema);
