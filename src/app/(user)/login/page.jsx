"use client";
import React from "react";
import styles from "./LoginPage.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Input from "@/components/Input/Input";
import Link from "next/link";

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

const page = () => {
  return (
    <section className={styles.container}>
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
      <div className={styles.signin}>
        <div className={styles.signin_caption}>
          <h3>SIGN IN TO YOUR ACCOUNT</h3>
          <p>
            Please, enter your e-mail address and password or use Facebook
            authentication
          </p>
        </div>
        <div className={styles.card}>
          <form action="">
            <Input type={"email"} text={"Email"} />
            <Input type={"password"} text={"Password"} />
            <div className={styles.submit}>
              <Link href={"/#"}>Forgot password?</Link>
              <button>Sign in</button>
            </div>
          </form>
          <div className={styles.fb_login}>
            <button>SIGN IN WITH FACEBOOK </button>
          </div>
        </div>
        <h4 className={styles.signup}>
          Still not an user? <a href="/#">Sign up</a>
        </h4>
      </div>
    </section>
  );
};

export default page;
