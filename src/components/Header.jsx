"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../Styles/Header.module.css";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setScrollHeight(true);
      } else {
        setScrollHeight(false);
      }
    });
  }, []);

  return (
    <header
      className={`${styles.header} ${scrollHeight ? styles.header_fixed : ""}`}
    >
      <Navbar scrollHeight={scrollHeight} />
    </header>
  );
};

export default Header;
