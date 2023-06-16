import { getdata } from "./Data";

import styles from "./EventDetails.module.css";
import Image from "next/image";
import Link from "next/link";

import Icon from "../../../assets/img/pin.svg";
import Calendar from "../../../assets/img/calendar-light.svg";
import SocialButtons from "@/components/EventDetails/SocialButtons";
import DetailTickets from "@/components/EventDetails/DetailTickets";
import DetailDescription from "@/components/EventDetails/DetailDescription";
import DetailInformation from "@/components/EventDetails/DetailInformation";
import StickyHeader from "@/components/EventDetails/StickyHeader";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  // fetch here

  return {
    title: "...",
    description: "...",
  };
}

export default async function Page({ params }, props) {
  const Data = await getdata(params.slug);

  return (
    <>
      <section>
        <StickyHeader title={Data.title} />
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.main_img}>
              <img src={Data.image} />
            </div>
            <div className={styles.details}>
              <div className={styles.date}>
                <p>{Data.date}</p>
              </div>
              <div className={styles.info}>
                <h1 className={styles.event_name}>{Data.title}</h1>
                <p className={styles.event_by}>
                  Event by : <Link href={"/#"}>{Data.by}</Link>
                </p>
                <p className={styles.location}>
                  <Image width={12} height={12} src={Icon} alt="location" />
                  {Data.location}
                </p>
                <p className={styles.period}>
                  <Image width={12} height={12} src={Calendar} alt="location" />
                  00:00 Saturday, 19 March, 2022
                </p>
              </div>
              <div className={styles.social}>
                <SocialButtons />
              </div>
            </div>
          </div>
          <DetailTickets />
          <DetailDescription />
          <DetailInformation />
        </div>
      </section>
      <Footer />
    </>
  );
}
