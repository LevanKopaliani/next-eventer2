"use client";
import React, { useLayoutEffect } from "react";
/// swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
///
import styles from "../Styles/Featured.module.css";
import FeaturedCard from "./FeaturedCard";

let dummyData = [
  {
    id: "1",
    image: "https://picsum.photos/700/250",
    title: "Festival 1 Days",
    date: "May 07",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "2",
    image: "https://picsum.photos/700/250",
    title: "Festival 2 Days",
    date: "Apr 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "aug 21",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
];

const Featured = (props) => {
  //fix after recieve data

  if (props.data) {
    dummyData = dummyData.slice(0, props.data);
  }

  return (
    <section className={styles.featured}>
      <h3 className={styles.title}>featured</h3>
      <div className={styles.content}>
        {dummyData.map((event) => (
          <FeaturedCard
            key={event.id + event.title}
            fullwidth={true}
            {...event}
            className={
              dummyData.length === 1
                ? `${styles.card} ${styles.only_child}`
                : styles.card
            }
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
            <SwiperSlide
              className={styles.slide}
              key={event.id + " swiper_item"}
            >
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
