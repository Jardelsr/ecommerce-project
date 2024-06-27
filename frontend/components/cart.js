import React from 'react';

const Cart = ({ items, onRemove }) => {
    return (
        <div>
            <h2>Carrinho de Compras</h2>
            {items.length === 0 ? (
                <p>Nenhum item no carrinho.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item._id}>
                            <h4>ID: {item.productId}</h4>
                            <p>Quantidade: {item.quantity}</p>
                            <p>Preço: R${item.price}</p>
                            <button onClick={() => onRemove(item._id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
