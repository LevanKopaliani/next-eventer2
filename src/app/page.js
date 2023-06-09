import Image from "next/image";
import React from "react";
import MainBannerImg from "../assets/img/mainbanner.png";

import styles from "./page.module.css";
import HomeMenu from "@/components/HomeMenu";
import EventsMap from "@/components/EventsMap";
import Featured from "@/components/Featured";
import Tickets from "@/components/Tickets";
import Services from "@/components/Services";
import AllEvents from "@/components/AllEvents";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
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
          <Tickets />
          <AllEvents />
        </section>
        <Services />
      </main>
      <Footer />
    </>
  );
}
