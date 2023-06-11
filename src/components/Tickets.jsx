import React from "react";
import styles from "../Styles/Tickets.module.css";
import Card from "./Card";

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
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "03",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "03",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "03",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    date: "03",
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

const Tickets = () => {
  return (
    <section className={styles.tickets}>
      <div className={styles.filter_container}>
        <h3 className={styles.title}>tickets</h3>
      </div>
      <div className={styles.content}>
        {dummyData.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </section>
  );
};

export default Tickets;
