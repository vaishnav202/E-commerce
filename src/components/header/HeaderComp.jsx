import React, { useState } from 'react';
import styles from './header.module.css';
import searchicon from '../../assets/search1.png';
import cart from '../../assets/cart.svg';
import wish from '../../assets/wishlist.svg';
import { Link } from 'react-router-dom';
import LoginModal from '../auth/LoginModal';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import furnitureData from '../../data/furnitureData.json';

const Header = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const [showWishDropdown,setShowWishDropdown] = useState(false);
   const [wishItems, setWishItems] = useState([
    { id: 1, name: 'Sofa', price: 499, qty: 1 },
    { id: 2, name: 'Chair', price: 129, qty: 2 },
  ]);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Sofa', price: 499, qty: 1 },
    { id: 2, name: 'Chair', price: 129, qty: 2 },
  ]);
  const [showLogin, setShowLogin] = useState(false);

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

  const wishtotal = wishItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const wishCount = wishItems.reduce((count, item) => count + item.qty, 0);

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
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className={styles.searchInput}
          />
          <div className={styles.search}><img className={styles.searchIcon} src={searchicon} alt="search" /></div>
          
          {filteredSuggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {filteredSuggestions.map((item, index) => (
                <li key={index}><Link to="/">{item}</Link></li>
              ))}
            </ul>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <a href="/login"><FaUser /> Login</a>
            <a href="/wishlist"><FaHeart /> Wishlist</a>
            <a href="/cart"><FaShoppingCart /> Cart</a>
          </div>
        )}
        {/* Login */}
        <span className={styles.log}>
          <button className={styles.loginBtn} onClick={() => setShowLogin(true)}>Login</button>
          <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
          </span>

       
        {/* Wish List */}
        <div
          className={styles.wishWrapper}
          onMouseEnter={() => setShowWishDropdown(true)}
          onMouseLeave={() => setShowWishDropdown(false)}
          >
          <div className={styles.wishIconWrapper}>
            <img className={styles.wishIcon} src={wish} alt="cart" />
            {wishCount > 0 && <span className={styles.wishCount}>{wishCount}</span>}
          </div>
          

          {showWishDropdown && (
            <div className={styles.wishDropdown}>
              <h4>WishList Preview</h4>
              {wishItems.length > 0 ? (
                <>
                  <ul className={styles.wishItems}>
                    {wishItems.map((item) => (
                      <li key={item.id}>
                        {item.name} × {item.qty} — ₹{item.price * item.qty}
                        <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>✕</button>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.wishTotal}>
                    <strong>Total:</strong> ₹{wishtotal}
                  </div>
                  <Link to="/cart" className={styles.wishButton}>Shop now</Link>
                </>
              ) : (
                <p className={styles.emptyWish}>Your cart is empty</p>
              )}
            </div>
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
        {/* Cart Icon */}
        
        

      </div>

      {/* Navigation */}
      <nav className={styles.headright}>
        <Link to="/" className={styles.tag}>Home</Link>

        {[
          { title: 'Furniture', items: ['Living', 'Dining', 'Bedroom'] },
          { title: 'Outdoor', items: ['Outdoor lounge', 'Outdoor dining', 'Outdoor decor'] },
          { title: 'Decor', items: ['Mirrors', 'Storages', 'Home Fragrance', 'Art'] }
        ].map((menu, i) => (
          <div className={styles.dropdownContainer} 
            key={i}
            onMouseEnter={() => setHoveredDropdown(i)}
            onMouseLeave={() => setHoveredDropdown(null)}
            >

            <span className={styles.tag}>{menu.title}</span>
            {hoveredDropdown === i && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdown}>
                <ul>
                {menu.items.map((item, j) => (
                  <li key={j}>
                    <Link to={`/subcategory/${encodeURIComponent(item)}`}
                      onClick={() => setHoveredDropdown(null)}>{item}</Link>
                  </li>
                ))}
              </ul>

              </div>
              
              {/* Product Image Row */}
              <div className={styles.imageRow}>
                {Object.values(
                  furnitureData.reduce((acc, product) => {
                    if (!acc[product.subcategory] && product.category === menu.title) {
                      acc[product.subcategory] = product; // Take first product per subcategory
                    }
                    return acc;
                  }, {})
                ).map(product => (
                  <div key={product.id} className={styles.imageCard}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                  </div>
                ))}
              </div>

            </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
