import React from "react";
import styles from "./DetailTickets.module.css";

const DetailTickets = (props) => {
  return (
    <section className={styles.container}>
      <span id="fixed_line"></span>
      <h3 className={styles.title}>Tickets</h3>
    </section>
  );
};

export default DetailTickets;
