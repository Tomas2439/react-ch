import React from 'react';
import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartItem = ({ item, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="cart-item">
            <h4 className="item-name">{item.name}</h4>
            <span className="item-quantity">Quantity: {quantity}</span>
            <span className="item-price">Price: ${item.price}</span>
            <button onClick={() => removeItem(item.id)}></button>
        </div>
    );
};

export default CartItem;