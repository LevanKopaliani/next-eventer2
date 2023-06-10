"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import LogoWhite from "../assets/img/eventer-logo-white.png";
import LogoBlack from "../assets/img/eventer-logo-black.png";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import styles from "../Styles/Navbar.module.css";
import LoginTabs from "./LoginTabs";
import Link from "next/link";

const Navbar = ({ scrollHeight }) => {
  const [searchisOpen, setSearchIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.querySelector("html").classList.add("fixed");
    } else {
      document.querySelector("html").classList.remove("fixed");
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`${styles.navbar} ${
        scrollHeight ? "text-black " : "text-white"
      }`}
    >
      <MobileMenuButton
        scrollHeight={scrollHeight}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <MobileMenu isOpen={mobileMenuOpen} />
      <div className={styles.logo_container}>
        <Link href={"/"}>
          <Image
            src={scrollHeight ? LogoBlack : LogoWhite}
            alt="logo"
            className={styles.logo_img}
          />
        </Link>
      </div>
      {!searchisOpen ? (
        <ul className={styles.nav_links}>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      ) : null}
      <div className={styles.navbar_bars}>
        <SearchBar searchisOpen={setSearchIsOpen} scrollHeight={scrollHeight} />
        <div className={styles.login_tabs_container}>
          <LoginTabs />
        </div>

        <div className={styles.language_bar}>
          <button>en</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
