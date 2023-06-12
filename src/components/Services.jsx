import React from "react";
import styles from "../Styles/Services.module.css";
import ServicesCard from "./ServicesCard";
import Link from "next/link";

import CardImage1 from "../assets/img/cashless-black.svg";
import CardImage2 from "../assets/img/management.svg";
import CardImage3 from "../assets/img/payment.svg";

const dummydata = [
  {
    image: CardImage1,
    title: "Cashless Payments",
    subtitle:
      "Cashless is an unique solution to streamline the operations of Large venues and live events",
  },
  {
    image: CardImage2,
    title: "Cashless Payments",
    subtitle:
      "Cashless is an unique solution to streamline the operations of Large venues and live events",
  },
  {
    image: CardImage3,
    title: "Cashless Payments",
    subtitle:
      "Cashless is an unique solution to streamline the operations of Large venues and live events",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.banner}>
        <div className={styles.caption}>
          <h1>SELL TICKETS WITH US</h1>
          <i>
            Set up an event remotely and let your audience buy tickets
            <br />
            with easiest, fastest and secure way
          </i>
          <Link href={"/#signup"}>
            <button>Create Event</button>
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        {dummydata.map((item) => (
          <ServicesCard key={item.title} {...item} />
        ))}
      </div>
      <Link href={"/#services"} className={styles.allservices}>
        <button>All Services</button>
      </Link>
    </section>
  );
};

export default Services;
