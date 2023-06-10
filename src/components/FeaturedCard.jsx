import React from "react";
import styles from "../Styles/FeaturedCard.module.css";
import Image from "next/image";

const FeaturedCard = (props) => {
  return (
    <div
      style={{ maxWidth: props.fullwidth ? "100%" : "463px" }}
      className={`${styles.featuredcard} ${props.className}`}
    >
      <img src={props.image} alt={props.alt} className={styles.poster} />
      <div className={styles.details}>{props.name}</div>
    </div>
  );
};

export default FeaturedCard;
