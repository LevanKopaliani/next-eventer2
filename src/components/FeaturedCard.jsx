import React from "react";
import styles from "../Styles/FeaturedCard.module.css";
import Image from "next/image";
import Icon from "../assets/img/pin.svg";

const FeaturedCard = (props) => {
  return (
    <div
      style={{ maxWidth: props.fullwidth ? "100%" : "463px" }}
      className={`${styles.featuredcard} ${props.className}`}
    >
      <img src={props.image} alt={props.alt} className={styles.poster} />
      <div className={styles.details}>
        <div className={styles.date}>{props.date}</div>
        <div className={styles.info}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.location}>
            <Image width={12} height={12} src={Icon} alt="location" />
            {props.location}
          </p>
        </div>
        <div className={styles.buy}>sold out</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
