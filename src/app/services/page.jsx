import ServicesBanner from "@/components/ServicesBanner";
import ServicesCard from "@/components/ServicesCard";
import React from "react";
import styles from "./ServicesPage.module.css";

import facebook_verification from "../../assets/img/facebook_verification.svg";
import payment from "../../assets/img/payment.svg";
import cashless from "../../assets/img/cashless-black.svg";
import management from "../../assets/img/management.svg";
import after_movie from "../../assets/img/after_movie.svg";
import media_management from "../../assets/img/media_management.svg";
import Link from "next/link";
import Footer from "@/components/Footer";

const dummydata = [
  {
    image: facebook_verification,
    title: "Verification",
    subtitle:
      "This service is commonly used by clubs and medium sized events, which by itself means online facecontrol. Before purchase user gets verified by brand for future payments",
  },
  {
    image: payment,
    title: "Payment Boxes",
    subtitle:
      "No Card? No problem, our tickets and balance top up is available through Express Pay, TBC Pay and MultiPAY Payment boxes, all over the Georgia",
  },
  {
    image: cashless,
    title: "Cashless Payments",
    subtitle:
      "Cashless is an unique solution to streamline the operations of Large venues and live events",
  },
  {
    image: management,
    title: "Guest List Management",
    subtitle:
      "Fastest and optimal solution to deliver event invitations to your guests remotely. Forget papers and go full digital.",
  },
  {
    image: after_movie,
    title: "Cashless Payments",
    subtitle:
      "Cashless is an unique solution to streamline the operations of Large venues and live events",
  },
  {
    image: media_management,
    title: "Guest List Management",
    subtitle:
      "Fastest and optimal solution to deliver event invitations to your guests remotely. Forget papers and go full digital.",
  },
];

const page = () => {
  return (
    <>
      <div className={styles.banner}>
        <ServicesBanner height={490} />
      </div>

      <section className={styles.container}>
        <h1>Standard package includes services</h1>
        <div className={styles.grid}>
          <ServicesCard width={66} {...dummydata[0]} />
          <ServicesCard {...dummydata[1]} />
        </div>
        <h1>SPremium Services </h1>
        <div className={styles.grid}>
          <ServicesCard width={70} {...dummydata[2]} />
          <ServicesCard width={51} {...dummydata[3]} />
          <ServicesCard width={70} {...dummydata[4]} />
          <ServicesCard width={71} {...dummydata[5]} />
        </div>
        <Link href={"/signup/company"} className={styles.allservices}>
          <button>Create Event</button>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default page;
