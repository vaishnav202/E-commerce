import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/furnitureData.json';
import styles from './productDetail.module.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const imgRef = useRef(null);
  const previewRef = useRef(null);

  const [lensVisible, setLensVisible] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [isMobile, setIsMobile] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      setImageSize({ width, height });
    }
  }, [product]);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const bounds = imgRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) {
      setLensVisible(false);
      return;
    }

    setLensVisible(true);
    const limitedX = Math.max(0, Math.min(x, bounds.width));
    const limitedY = Math.max(0, Math.min(y, bounds.height));
    const percentX = (limitedX / bounds.width) * 100;
    const percentY = (limitedY / bounds.height) * 100;

    setLensPosition({ x: limitedX, y: limitedY });
    setBackgroundPosition(`${percentX}% ${percentY}%`);
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.detailContainer}>
      <div
        className={styles.zoomContainer}
        onMouseMove={!isMobile ? handleMouseMove : null}
        onMouseLeave={() => setLensVisible(false)}
      >
        <div className={styles.imageWrapper}>
          {isMobile ? (
            <Zoom>
              <img src={product.image} alt={product.name} className={styles.mainImage} />
            </Zoom>
          ) : (
            <>
              <img ref={imgRef} src={product.image} alt={product.name} className={styles.mainImage} />
              {lensVisible && (
                <div
                  className={styles.magnifier}
                  style={{
                    left: `${lensPosition.x - 75}px`,
                    top: `${lensPosition.y - 75}px`,
                    backgroundImage: `url(${product.image})`,
                    backgroundPosition,
                  }}
                />
              )}
            </>
          )}
        </div>

        {!isMobile && lensVisible && (
          <div
            ref={previewRef}
            className={styles.zoomPreview}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundPosition,
              width: `${imageSize.width * 0.8}px`,
              height: `${imageSize.height}px`,
              backgroundSize: `${imageSize.width * 2}px ${imageSize.height * 2}px`,
            }}
          ></div>
        )}
      </div>

      <div className={styles.details}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.rating}>⭐ {product.rating} Rating</p>

        <div className={styles.priceBlock}>
          <span className={styles.price}>₹{product.price}</span>
          {product.discount && <span className={styles.discount}>{product.discount}</span>}
        </div>

        <div className={styles.stock}>In stock: {product.quantity}</div>

        <div className={styles.quantityBlock}>
          <span>Quantity:</span>
          <div className={styles.qtySelector}>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => Math.min(product.quantity, q + 1))}>+</button>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.addBtn}>Add to Cart</button>
          <button className={styles.buyBtn}>Buy Now</button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
