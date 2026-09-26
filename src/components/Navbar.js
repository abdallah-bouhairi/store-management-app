import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={`navbar ${theme}`}>
      <h2>ShopHub</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalCount})</Link>
        <button onClick={toggleTheme}>
          Theme: {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;