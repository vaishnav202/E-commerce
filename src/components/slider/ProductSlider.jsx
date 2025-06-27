import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./productSlider.module.css";
import products from '../../data/furnitureData.json';




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

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {selectedProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <div className={styles.details}>
              <h2 className={styles.name}>{product.name}</h2>
              <div className={styles.priceSection}>
                <span className={styles.price}>₹{product.price}</span>
                {product.discount && (
                  <span className={styles.discount}>{product.discount}</span>
                )}
              </div>
              <Link to={`/product/${product.id}`}>
                <button className={styles.button}>Shop Now</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
