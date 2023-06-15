import { url } from "inspector";
import { getdata } from "./Data";

import styles from "./EventDetails.module.css";
import Image from "next/image";

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
    <section>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.main_img}>
            <img src={Data.image} />
          </div>
          <div className={styles.details}>
            <div className={styles.date}>
              <p>{Data.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
