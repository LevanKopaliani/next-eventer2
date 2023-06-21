"use client";
import React, { useEffect, useState } from "react";
import styles from "../Styles/Tickets.module.css";
import Card from "./Card";
import FilterBar from "./FilterBar/FilterBar";

const dummyData = [
  {
    id: "1",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "2",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "4",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "5",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "6",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "7",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "8",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
];

const Tickets = () => {
  // const [openFilter, setOpenFilter] = useState(false);
  // const [popular, setPopular] = useState(false);
  // const [weekend, setWeekend] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setOpenFilter(true), 3000);
  // }, []);

  return (
    <section className={styles.tickets}>
      <div className={styles.filter_container}>
        <h3 className={styles.title}>tickets</h3>
        <FilterBar />
        {/* <div className={styles.filter}>
          <div
            className={
              openFilter
                ? `${styles.filter_menu} ${styles.filter_visible}`
                : styles.filter_menu
            }
          >
            <ul>
              <li>Date</li>
              <li
                onClick={() => setPopular(!popular)}
                className={popular ? styles.filter_active : null}
              >
                Most Popular
              </li>
              <li
                onClick={() => setWeekend(!weekend)}
                className={weekend ? styles.filter_active : null}
              >
                This Weekend
              </li>
            </ul>
          </div>
        </div>
        <button
          className={
            openFilter
              ? `${styles.fitler_button} ${styles.button_border}`
              : styles.fitler_button
          }
          onClick={() => setOpenFilter(!openFilter)}
        >
          Filter
        </button> */}
      </div>
      <div className={styles.content}>
        {dummyData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Tickets;
