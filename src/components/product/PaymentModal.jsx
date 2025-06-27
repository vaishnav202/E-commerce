import React from 'react';
import styles from './paymentModal.module.css';

const PaymentModal = ({ show, onClose, productTitle, productImage, quantity, price }) => {
  if (!show) return null;

  const total = (quantity * price).toFixed(2);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <img src={productImage} alt={productTitle} className={styles.productImg} />
          <h3>{productTitle}</h3>
        </div>

        <label>Enter quantity</label>
        <input type="number" value={quantity} readOnly />

        <label>Name</label>
        <input type="text" placeholder="Full name" />

        <label>Email</label>
        <input type="email" placeholder="you@example.com" />

        <label>Credit or debit card</label>
        <input type="text" placeholder="Card number" />
        <div className={styles.cardInfo}>
          <input type="text" placeholder="MM / YY" />
          <input type="text" placeholder="CVC" />
        </div>

        <button className={styles.payBtn}>
          Pay ${total} USD
        </button>

        <button className={styles.closeBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
