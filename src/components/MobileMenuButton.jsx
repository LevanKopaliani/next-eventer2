"use client";
import React from "react";
import styles from "../Styles/MobileMenuButton.module.css";

const MobileMenuButton = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollHeight,
}) => {
  const menuColor = scrollHeight ? "bg-slate" : "bg-white";

  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className={styles.mobile_menu_button}
    >
      <span
        className={menuColor}
        style={{ width: mobileMenuOpen ? "20px" : "15px" }}
      ></span>
      <span
        className={menuColor}
        style={{ width: mobileMenuOpen ? "15px" : "20px" }}
      ></span>
      <span
        className={menuColor}
        style={{ width: mobileMenuOpen ? "20px" : "15px" }}
      ></span>
      <span
        className={menuColor}
        style={{ width: mobileMenuOpen ? "15px" : "20px" }}
      ></span>
    </button>
  );
};

export default MobileMenuButton;
