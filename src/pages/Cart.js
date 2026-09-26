import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="page cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            ))}
          </div>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;