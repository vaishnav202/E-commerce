import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/furnitureData.json'; // adjust path if needed
import styles from './subcategoryPage.module.css';

const SubcategoryPage = () => {
  const { subcategory } = useParams();

  // Filter products matching the subcategory (case-insensitive)
  const filteredProducts = productsData.filter(
    (product) =>
      product.subcategory.toLowerCase() === subcategory.toLowerCase()
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Products in {subcategory}</h2>
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
  <div key={product.id} className={styles.card}>
    
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      {product.discount && <span className={styles.discount}>{product.discount}</span>}
      <p>Rating: {product.rating} ⭐</p>
        <Link to={`/product/${product.id}`}>
            <button className={styles.shopBtn}>Shop Now</button>
        </Link>
    
  </div>
))}
        {filteredProducts.length === 0 && (
          <p className={styles.noProducts}>No products found in this subcategory.</p>
        )}
      </div>
    </div>
  );
};

export default SubcategoryPage;
