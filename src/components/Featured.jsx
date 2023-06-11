"use client";
import React from "react";
/// swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
///
import styles from "../Styles/Featured.module.css";
import FeaturedCard from "./FeaturedCard";

const dummyData = [
  {
    id: "1",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "01",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "2",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "02",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "03",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
];

const Featured = () => {
  return (
    <section className={styles.featured}>
      <h3 className={styles.title}>featured</h3>
      <div className={styles.content}>
        {dummyData.map((event) => (
          <FeaturedCard
            key={event.id}
            fullwidth={true}
            {...event}
            className={styles.card}
          />
        ))}
      </div>
      <div className={styles.swiper}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            el: "#pagi",
            clickable: true,
            renderBullet: (index, className) => {
              return (
                '<span class="' +
                className +
                " " +
                styles.pagi_bullet +
                '">' +
                "</span>"
              );
            },
          }}
        >
          {dummyData.map((event) => (
            <SwiperSlide className={styles.slide}>
              <FeaturedCard
                key={event.id}
                fullwidth={true}
                {...event}
                className={styles.card}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        // style={{ display: "flex", justifyContent: "center" }}
        className={styles.pagi}
        id="pagi"
      ></div>
    </section>
  );
};

export default Featured;
