"use client";
import React from "react";
import styles from "../Styles/MobileMenu.module.css";
import LoginTabs from "./LoginTabs";

import MusicImage from "@/assets/img/MusicImage";
import Link from "next/link";
import BusinessImage from "@/assets/img/BusinessImage";
import TheatreImage from "@/assets/img/TheatreImage";
import SportImage from "@/assets/img/SportImage";
import ServicesImage from "@/assets/img/ServicesImage";
import ContactImage from "@/assets/img/ContactImage";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isOpen, onCloseMenu }) => {
  const path = usePathname();

  return (
    <div
      style={{ left: isOpen ? "0" : "-100%" }}
      className={styles.mobile_menu}
    >
      <ul>
        <li className={`${styles.list_item} ${styles.lower}`}>
          <LoginTabs />
        </li>
        <li className={styles.list_item} onClick={() => onCloseMenu(false)}>
          <Link
            href={"/music"}
            className={path === "/music" ? styles.active : styles.links}
          >
            <MusicImage className={styles.icon_images} />
            <span>music</span>
          </Link>
        </li>
        <li className={styles.list_item} onClick={() => onCloseMenu(false)}>
          <Link
            href={"/business"}
            className={path === "/business" ? styles.active : styles.links}
          >
            <BusinessImage className={styles.icon_images} />
            <span>business</span>
          </Link>
        </li>
        <li className={styles.list_item} onClick={() => onCloseMenu(false)}>
          <Link
            href={"/theatre"}
            className={path === "/theatre" ? styles.active : styles.links}
          >
            <TheatreImage className={styles.icon_images} />
            <span>theatre</span>
          </Link>
        </li>
        <li className={styles.list_item} onClick={() => onCloseMenu(false)}>
          <Link
            href={"/sport"}
            className={path === "/sport" ? styles.active : styles.links}
          >
            <SportImage className={styles.icon_images} />
            <span>sport</span>
          </Link>
        </li>
        <li
          className={`${styles.list_item} ${styles.opacity}`}
          onClick={() => onCloseMenu(false)}
        >
          <Link
            href={"/services"}
            className={path === "/services" ? styles.active : styles.links}
          >
            <ServicesImage className={styles.icon_images} />
            <span>services</span>
          </Link>
        </li>
        <li
          className={`${styles.list_item} ${styles.opacity}`}
          onClick={() => onCloseMenu(false)}
        >
          <Link
            href={"/contact"}
            className={path === "/contact" ? styles.active : styles.links}
          >
            <ContactImage className={styles.icon_images} />
            <span>contact</span>
          </Link>
        </li>
        <li className={styles.list_item}>
          <h3>Change Language</h3>
          <div className={styles.change_language}>
            <span>EN</span>
            <span>GE</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
