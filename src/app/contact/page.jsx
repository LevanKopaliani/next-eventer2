import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";

const page = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.info}>
          <h1>SSUP?</h1>
          <i>If you have any questions or need some help, contact us</i>
          <p>
            Email: contact@eventer.ge
            <br />
            Phone: +995 598 798 797
            <br />
            <br />
            Working Hours: 10:00 - 20:00
          </p>
          <br />
          <Link
            href={"https://m.me/eventer.ge"}
            target="_blank"
            className={styles.messenger}
          >
            Contact us on messenger
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.group}>
            <input type="text" />
            <label htmlFor="">Name*</label>
            <i className={styles.bar}></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
