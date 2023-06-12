import React from "react";
import styles from "../Styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Visa from "../assets/img/visa.svg";
import MasterCard from "../assets/img/mastercard.svg";
import Coin from "../assets/img/coin.svg";
import Facebook from "../assets/img/facebook.svg";
import Instagram from "../assets/img/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribe}>
        <h3>SUBSCRIBE FOR NEWSLETTERS</h3>
        <p>
          Be updated about events, interesting activities and special discounts.
        </p>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="subscribe"
          />
          <button></button>
        </form>
      </div>
      <div className={styles.sitemap}>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href={"/#featured"}>Featured</Link>
            </li>
            <li>
              <Link href={"/#featured"}>Tickets</Link>
            </li>
            <li>
              <Link href={"/#featured"}>All Events</Link>
            </li>
          </ul>
        </div>
        <div className={styles.terms}>
          <ul>
            <li>
              <Link href={"/#featured"}>privacy policy</Link>
            </li>
            <li>
              <Link href={"/#featured"}>terms & conditions</Link>
            </li>
          </ul>
        </div>
        <div className={styles.payments}>
          <ul>
            <li className={styles.payments_text}>
              <Link href={"/#featured"}>payments</Link>
            </li>
            <li className={styles.visa}>
              <Link href={"/#visa"}>
                <Image width={78} height={24} src={Visa} alt="visa" />
              </Link>
              <Link href={"/#master"} className={styles.mastercard}>
                <Image
                  width={48}
                  height={30}
                  src={MasterCard}
                  alt="mastercard"
                />
              </Link>
              <Link href={"/#master"} className={styles.coin_visa}>
                <Image width={30} height={30} src={Coin} alt="bitcoin" />
                <span>balance</span>
              </Link>
            </li>
            <li className={styles.coin_container}>
              <Link href={"/#master"} className={styles.coin}>
                <Image width={30} height={30} src={Coin} alt="bitcoin" />
                <span>balance</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <p className={styles.eventer}>eventer</p>
        <p className={styles.rights}>© All Rights Reserved , 2023</p>
        <div className={styles.social_container}>
          <ul className={styles.social_links}>
            <li>
              <Link href={"#/facebook"}>
                <Image
                  src={Facebook}
                  width={10}
                  height={20}
                  alt="facebook"
                ></Image>
              </Link>
            </li>
            <li>
              <Link href={"#/instagram"}>
                <Image
                  src={Instagram}
                  width={20}
                  height={20}
                  alt="instagram"
                ></Image>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
