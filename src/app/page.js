import Image from "next/image";
import React from "react";
import MainBannerImg from "../assets/img/mainbanner.png";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main" style={{ height: "2000px" }}>
      <div className={styles.mainbanner_container}>
        <Image
          alt="main banner"
          src={MainBannerImg}
          className={styles.mainbanner_image}
        />
      </div>
    </main>
  );
}
