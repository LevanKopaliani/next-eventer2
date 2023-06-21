"use client";
import React, { useEffect, useState } from "react";
import styles from "../Styles/HomeMenu.module.css";
import Link from "next/link";
import MusicImage from "@/assets/img/MusicImage";
import BusinessImage from "@/assets/img/BusinessImage";
import TheatreImage from "@/assets/img/TheatreImage";
import SportImage from "@/assets/img/SportImage";

import { usePathname } from "next/navigation";

//// path

////

const HomeMenu = () => {
  const path = usePathname();

  return (
    <div className={styles.menu}>
      <ul className={styles.container}>
        <li>
          <Link
            href={"/music"}
            className={path === "/music" ? styles.active : styles.link}
          >
            <MusicImage className={styles.icons} />
            <span>music</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/business"}
            className={path === "/business" ? styles.active : styles.link}
          >
            <BusinessImage className={styles.icons} />
            <span>business</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/theatre"}
            className={path === "/theatre" ? styles.active : styles.link}
          >
            <TheatreImage className={styles.icons} />
            <span>theatre</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/sport"}
            className={path === "/sport" ? styles.active : styles.link}
          >
            <SportImage className={styles.icons} />
            <span>sport</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeMenu;
