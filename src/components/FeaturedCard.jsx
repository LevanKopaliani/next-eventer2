import React from "react";
import styles from "../Styles/FeaturedCard.module.css";
import Image from "next/image";
import Icon from "../assets/img/pin.svg";
import Link from "next/link";

const FeaturedCard = (props) => {
  return (
    <div
      style={{ maxWidth: props.fullwidth ? "100%" : "463px" }}
      className={`${styles.featuredcard} ${props.className}`}
    >
      <Link href={"#/"}>
        <img src={props.image} alt={props.alt} className={styles.poster} />
      </Link>
      <div className={styles.details}>
        <div className={styles.date}>
          <p>{props.date}</p>
        </div>
        <div className={styles.info}>
          <Link href={"#/"}>
            <h3 className={styles.title}>{props.title}</h3>
          </Link>
          <p className={styles.location}>
            <Image width={12} height={12} src={Icon} alt="location" />
            {props.location}
          </p>
        </div>
        <div className={styles.buy}>
          <h3>sold out</h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
