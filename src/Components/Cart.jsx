import React, { useState } from 'react';
import { useCart } from './context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css';

const Cart = () => {
  const { cartItems, getTotal } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State to handle order confirmation
  const navigate = useNavigate(); // Hook to navigate to the homepage

  const handleCheckout = () => {
    // Simulating order confirmation
    setOrderConfirmed(true);
    
    // Set a timeout to navigate back to home after displaying confirmation
    setTimeout(() => {
      navigate('/login'); // Redirect to home page after 2 seconds
    }, 2000);
  };

  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {orderConfirmed ? (
        <div className="order-confirmation">
          <p>Your order has been confirmed! Redirecting to the home page...</p>
        </div>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-item-list">
            {cartItems.map((item) => (
              <li key={item._id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ₹{getTotal()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
