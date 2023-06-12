"use client";
import React, { useState } from "react";
import Card from "./Card";
import styles from "../Styles/AllEvents.module.css";

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
  {
    id: "9",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "10",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "11",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "12",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "13",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "14",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "15",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "16",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "17",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
];

let slicedData;

if (dummyData.length > 9) {
  slicedData = dummyData.slice(0, 9);
}

const AllEvents = () => {
  const [viewAll, setViewAll] = useState(false);

  const LoadMoreButton = (
    <div className={styles.load_more}>
      <button onClick={() => setViewAll(!viewAll)}>Load More</button>
    </div>
  );

  return (
    <section className={styles.allevents}>
      <div className={styles.container}>
        <h3 className={styles.title}>All Events</h3>
      </div>
      <div className={styles.content}>
        {dummyData.slice(0, 9).map((item) => (
          <Card key={item.id} {...item} />
        ))}
        {viewAll &&
          dummyData.slice(9).map((item) => <Card key={item.id} {...item} />)}
      </div>
      {!viewAll && LoadMoreButton}
    </section>
  );
};

export default AllEvents;
