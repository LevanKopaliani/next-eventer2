"use client";
import React from "react";
import styles from "./LoginSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const dummyData = [
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

const LoginSlider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
        {dummyData.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <img src={item.image} alt="event" />
            <div className={styles.caption}>
              <button>See More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagi} id="pagi"></div>
    </div>
  );
};

export default LoginSlider;
