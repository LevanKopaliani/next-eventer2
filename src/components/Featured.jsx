"use client";
import React from "react";
import styles from "../Styles/Featured.module.css";
import FeaturedCard from "./FeaturedCard";

const dummyData = [
  {
    id: "1",
    image: "https://picsum.photos/700/250",
    name: "event1",
    date: "01",
    location: "point 1",
  },
  {
    id: "1",
    image: "https://picsum.photos/700/250",
    name: "event1",
    date: "01",
    location: "point 1",
  },
  {
    id: "1",
    image: "https://picsum.photos/700/250",
    name: "event1",
    date: "01",
    location: "point 1",
  },
];

const Featured = () => {
  return (
    <section className={styles.featured}>
      <h3 className={styles.title}>featured</h3>
      <div className={styles.content}>
        {dummyData.map((event) => (
          <FeaturedCard fullwidth={true} {...event} className={styles.card} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
