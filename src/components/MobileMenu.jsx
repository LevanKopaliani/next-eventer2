"use client";
import React, { useEffect, useState } from "react";
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

const MobileMenu = ({ isOpen }) => {
  // router
  const patchName = usePathname();

  return (
    <div
      style={{ left: isOpen ? "0" : "-100%" }}
      className={styles.mobile_menu}
    >
      <ul>
        <li
          className={`${styles.mobile_menu_list_item} ${styles.mobile_menu_list_item_lower}`}
        >
          <LoginTabs />
        </li>
        <li className={styles.mobile_menu_list_item}>
          <Link
            href="/#music"
            className={
              patchName === "/" /// need to fix
                ? `${styles.mobile_menu_links} ${styles.mobile_menu_links_active}`
                : styles.mobile_menu_links
            }
          >
            <MusicImage className={styles.icon_images} />
            <span>music</span>
          </Link>
        </li>
        <li className={styles.mobile_menu_list_item}>
          <Link href={"#business"} className={styles.mobile_menu_links}>
            <BusinessImage className={styles.icon_images} />
            <span>business</span>
          </Link>
        </li>
        <li className={styles.mobile_menu_list_item}>
          <Link href={"#theatre"} className={styles.mobile_menu_links}>
            <TheatreImage className={styles.icon_images} />
            <span>theatre</span>
          </Link>
        </li>
        <li className={styles.mobile_menu_list_item}>
          <Link href={"#sport"} className={styles.mobile_menu_links}>
            <SportImage className={styles.icon_images} />
            <span>sport</span>
          </Link>
        </li>
        <li
          className={`${styles.mobile_menu_list_item} ${styles.mobile_menu_list_item_op}`}
        >
          <Link href={"#services"} className={styles.mobile_menu_links}>
            <ServicesImage className={styles.icon_images} />
            <span>services</span>
          </Link>
        </li>
        <li
          className={`${styles.mobile_menu_list_item} ${styles.mobile_menu_list_item_op}`}
        >
          <Link href={"#contact"} className={styles.mobile_menu_links}>
            <ContactImage className={styles.icon_images} />
            <span>contact</span>
          </Link>
        </li>
        <li className={styles.mobile_menu_list_item}>
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
