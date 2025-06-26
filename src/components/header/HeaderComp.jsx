import React, { useState } from 'react';
import styles from './header.module.css';
import searchicon from '../../assets/search1.png';
import cart from '../../assets/cart.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Sofa', price: 499, qty: 1 },
    { id: 2, name: 'Chair', price: 129, qty: 2 },
  ]);

  const productSuggestions = [
    'Sofa',
    'Wooden Bed',
    'Stylish Chair',
    'Dining Table',
    'Office Desk',
    'Bookshelf',
    'TV Stand',
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cartItems.reduce((count, item) => count + item.qty, 0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      const filtered = productSuggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <header className={styles.head}>
      <div className={styles.headleft}>
        <div className={styles.logo}>
            <Link to="/">Furni<span>Co</span></Link>
        </div>

        <span className={styles.log}>Login</span>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className={styles.searchInput}
          />
          <img className={styles.searchIcon} src={searchicon} alt="search" />
          {filteredSuggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {filteredSuggestions.map((item, index) => (
                <li key={index}><Link to="/">{item}</Link></li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart Icon */}
        <div
  className={styles.cartWrapper}
  onMouseEnter={() => setShowCartDropdown(true)}
  onMouseLeave={() => setShowCartDropdown(false)}
>
  <div className={styles.cartIconWrapper}>
    <img className={styles.cartIcon} src={cart} alt="cart" />
    {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
  </div>

  {showCartDropdown && (
    <div className={styles.cartDropdown}>
      <h4>Cart Preview</h4>
      {cartItems.length > 0 ? (
        <>
          <ul className={styles.cartItems}>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} × {item.qty} — ₹{item.price * item.qty}
                <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>✕</button>
              </li>
            ))}
          </ul>
          <div className={styles.cartTotal}>
            <strong>Total:</strong> ₹{total}
          </div>
          <Link to="/cart" className={styles.cartButton}>Go to Cart</Link>
        </>
      ) : (
        <p className={styles.emptyCart}>Your cart is empty</p>
      )}
    </div>
  )}
</div>

      </div>

      {/* Navigation */}
      <nav className={styles.headright}>
        <Link to="/" className={styles.tag}>Home</Link>

        {[
          { title: 'Furniture', items: ['Living', 'Dining', 'Bedroom'] },
          { title: 'Outdoor', items: ['Outdoor lounge', 'Outdoor dining', 'Outdoor decor'] },
          { title: 'Decor', items: ['Mirrors', 'Storages', 'Home Fragrance', 'Art'] }
        ].map((menu, i) => (
          <div className={styles.dropdownContainer} key={i}>
            <span className={styles.tag}>{menu.title}</span>
            <div className={styles.dropdownMenu}>
              <ul>
                {menu.items.map((item, j) => (
                  <li key={j}><Link to={`/subcategory/${encodeURIComponent(item)}`}>{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
