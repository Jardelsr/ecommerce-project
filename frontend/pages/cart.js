// pages/cart.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../components/cart';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/cart');
                setCartItems(data);
            } catch (error) {
                console.error('Erro buscar os items do carrinho:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleRemove = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/cart/${id}`);
            setCartItems(cartItems.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div>
            <Cart items={cartItems} onRemove={handleRemove} />
        </div>
    );
};

export default CartPage;
