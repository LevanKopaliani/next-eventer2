"use client";
import React, { useEffect, useState } from "react";
import styles from "./StickyHeader.module.css";

const StickyHeader = (props) => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [offset, setOffset] = useState(0);

  const stickyClass = stickyHeader
    ? `${styles.sticky_header} ${styles.sticky_active} `
    : styles.sticky_header;

  useEffect(() => {
    const fixed = document.getElementById("fixed_line").offsetTop;

    window.addEventListener("scroll", () => {
      if (window.scrollY > fixed - 90) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
  }, []);

  return (
    <div className={stickyClass}>
      <div className={styles.container}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.cart}>
          <span>₾</span>
          <button>Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
