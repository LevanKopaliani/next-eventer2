"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../Styles/Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    //////    need to fix ( return to homepage now work)
    if (pathName === "/") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 90) {
          setScrollHeight(true);
        } else {
          setScrollHeight(false);
        }
      });
    } else {
      setScrollHeight(true);
      // window.removeEventListener("scroll", () => {});
    }
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
