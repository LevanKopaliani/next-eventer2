import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import Input from "@/components/Input/Input";

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
          <Input type={"text"} text={"Name*"} required />
          <Input type={"email"} text={"Email*"} required />
          <Input type={"textarea"} text={"Message*"} required />
          <button>Send</button>
        </div>
      </div>
    </section>
  );
};

export default page;
