// ProductCardList.jsx
import React from 'react';
import SingleProductCard from './SingleProductCard';
import styles from './productCard.module.css';
import products from '../product/productsData'; 
import useScrollReveal from '../scroll/useScrollReveal';


const ProductCardList = () => {

  const [ref, visible] = useScrollReveal();

  return (
    <>
    <div className={`${styles.headingContainer} ${visible ? styles.visible : styles.hidden}` } ref={ref}>
      <h2 className={styles.sectionHeading}>Explore Our Collection</h2>
      <p className={styles.subheading}>Discover handcrafted wooden pieces made to elevate every space.</p>
    </div>
    <div className={styles.gridContainer}>
      {products.map(product => (
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
