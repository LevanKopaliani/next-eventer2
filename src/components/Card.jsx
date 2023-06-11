import React from "react";
import styles from "../Styles/Card.module.css";
import Image from "next/image";
import Icon from "../assets/img/pin.svg";
import Link from "next/link";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <Link href={"/#"}>
        <div className={styles.poster_container}>
          <img src={props.image} alt={props.alt} className={styles.poster} />
        </div>
      </Link>
      <div className={styles.details}>
        <div className={styles.date}>
          <p>{props.date}</p>
        </div>
        <div className={styles.info}>
          <Link href={"/#"}>
            <h3 className={styles.title}>{props.title}</h3>
          </Link>
          <p className={styles.location}>
            <Image width={12} height={12} src={Icon} alt="location" />
            {props.location}
          </p>
        </div>
      </div>
      <div className={styles.buy}>
        <h3>sold out</h3>
      </div>
    </div>
  );
};

export default Card;
