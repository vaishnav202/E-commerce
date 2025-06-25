import React from 'react'
import styles from './header.module.css'
import searchicon from '../../assets/search1.png'
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <header className={styles.head}>
        <div className={styles.headleft}>
            <span className={styles.log}>Login</span>
            <span className={styles.log}><img className={styles.search} src={searchicon} alt="search" /></span>
            <span className={styles.log}><img src={cart} alt="cart" /></span>
        </div>
        <nav className={styles.headright}>
            <Link to="/" className={styles.tag}>New</Link>

            
            <div className={styles.dropdownContainer}>
                <span className={styles.tag}>Collection</span>
                <div className={styles.dropdownMenu}>
                <ul>
                    <li><Link to="/">Jess Designs</Link></li>
                    <li><Link to="/">Verandas Collection</Link></li>
                    <li><Link to="/">Miller Lounge Series</Link></li>
                    <li><Link to="/">Advi Series</Link></li>
                </ul>
                </div>
            </div>
            {/* Dropdown ends */}
            <div className={styles.dropdownContainer}>
                <span className={styles.tag}>Furniture</span>
                <div className={styles.dropdownMenu}>
                <ul>
                    <li>Entry Way</li>
                    <li>Living</li>
                    <li>Dining</li>
                    <li>Bedroom</li>
                </ul>
                </div>
            </div>
            <div className={styles.dropdownContainer}>
                <span className={styles.tag}>Outdoor</span>
                <div className={styles.dropdownMenu}>
                <ul>
                    <li>Outdoor lounge</li>
                    <li>Outdoor dining</li>
                    <li>Outdoor decor</li>
                    
                </ul>
                </div>
            </div>
            
            <div className={styles.dropdownContainer}>
                    <span className={styles.tag}>Decor</span>
                        <div className={styles.dropdownMenu}>
                            <ul>
                                <li>Mirrors</li>
                                <li>Storages</li>
                                <li>Home Fragrance</li>
                                <li>Art</li>
                            </ul>
                            </div>
            </div>
            
        </nav>

        
        
        
    </header>
    </>
    
  )
}

export default Header