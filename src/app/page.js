import Image from "next/image";
import React from "react";
import MainBannerImg from "../assets/img/mainbanner.png";

import styles from "./page.module.css";
import HomeMenu from "@/components/HomeMenu";
import EventsMap from "@/components/EventsMap";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <main className={styles.main} style={{ height: "2000px" }}>
      <div className={styles.banner_container}>
        <Image
          alt="main banner"
          src={MainBannerImg}
          className={styles.banner_image}
        />
      </div>
      <section className={styles.wrapper}>
        <HomeMenu />
        <EventsMap />
        <Featured />
      </section>
    </main>
  );
}
