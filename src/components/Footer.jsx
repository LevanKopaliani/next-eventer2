import React from "react";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribe}>
        <h3>SUBSCRIBE FOR NEWSLETTERS</h3>
        <p>
          Be updated about events, interesting activities and special discounts.
        </p>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="subscribe"
          />
          <button></button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
