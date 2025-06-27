import React from 'react';
import styles from './loginModal.module.css';

const LoginModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Login</h2>

        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <label>Phone Number</label>
        <input type="number" placeholder="Enter phone number" />

        <button className={styles.loginBtn}>Get OTP</button>
        <button className={styles.closeBtn} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
