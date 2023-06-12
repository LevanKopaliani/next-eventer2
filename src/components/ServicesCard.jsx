import React from "react";
import styles from "../Styles/ServicesCard.module.css";
import Image from "next/image";

const ServicesCard = (props) => {
  return (
    <div className={styles.servicescard}>
      <div className={styles.container}>
        <Image width={51} src={props.image} alt="image" />
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
  );
};

export default ServicesCard;
