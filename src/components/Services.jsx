import React from "react";
import styles from "../Styles/Services.module.css";
import ServicesCard from "./ServicesCard";
import Link from "next/link";

import CardImage1 from "../assets/img/cashless-black.svg";
import CardImage2 from "../assets/img/management.svg";
import CardImage3 from "../assets/img/payment.svg";
import ServicesBanner from "./ServicesBanner";

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
      <ServicesBanner />
      <div className={styles.container}>
        <ServicesCard width={51} {...dummydata[0]} />
        <ServicesCard width={51} {...dummydata[1]} />
        <ServicesCard width={75} {...dummydata[2]} />
        {/* {dummydata.map((item) => (
          <ServicesCard key={item.title} {...item} />
        ))} */}
      </div>
      <Link href={"/services"} className={styles.allservices}>
        <button>All Services</button>
      </Link>
    </section>
  );
};

export default Services;
