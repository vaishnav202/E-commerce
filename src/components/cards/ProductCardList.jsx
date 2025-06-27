import React from 'react';
import SingleProductCard from './SingleProductCard';
import styles from './productCard.module.css';
import products from '../../data/furnitureData.json';
import useScrollReveal from '../scroll/useScrollReveal';

const ProductCardList = () => {
  const [ref, visible] = useScrollReveal();

  // ✅ Step 1: Group by category and pick 2
  const getTopProductsByCategory = (products) => {
    const categoryMap = {};

    products.forEach(product => {
      const { category } = product;
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }

      // Only allow up to 2 items per category
      if (categoryMap[category].length < 2) {
        categoryMap[category].push(product);
      }
    });

    // Flatten the result
    return Object.values(categoryMap).flat();
  };

  const selectedProducts = getTopProductsByCategory(products);

  return (
    <>
      <div className={`${styles.headingContainer} ${visible ? styles.visible : styles.hidden}`} ref={ref}>
        <h2 className={styles.sectionHeading}>Explore Our Collection</h2>
        <p className={styles.subheading}>Discover handcrafted wooden pieces made to elevate every space.</p>
      </div>

      <div className={styles.gridContainer}>
        {selectedProducts.map(product => (
          <SingleProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCardList;
