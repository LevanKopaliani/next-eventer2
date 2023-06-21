import React from "react";
import styles from "../Styles/ServicesBanner.module.css";
import Link from "next/link";

const ServicesBanner = (props) => {
  return (
    <div style={{ height: `${props.height}px` }} className={styles.banner}>
      <div className={styles.caption}>
        <h1>SELL TICKETS WITH US</h1>
        <i>
          Set up an event remotely and let your audience buy tickets
          <br />
          with easiest, fastest and secure way
        </i>
        <Link href={"/signup/company"}>
          <button>Create Event</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesBanner;
