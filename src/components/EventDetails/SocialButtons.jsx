"use client";
import React, { useState } from "react";
import styles from "./SocialButtons.module.css";
import Image from "next/image";
import Link from "next/link";

import Heart from "../../assets/img/heart-not-active-grey.svg";
import HeartAcrive from "../../assets/img/heart-active.svg";
import Share from "../../assets/img/share-grey.svg";

import fbBlack from "../../assets/img/fb-black.svg";
import google from "../../assets/img/google.svg";
import copyLink from "../../assets/img/link.svg";

const SocialButtons = () => {
  const [heartActive, setHeartActive] = useState(false);
  const [shareHover, setShareHover] = useState(false);

  const handleMouseOver = () => {
    setShareHover(true);
    setTimeout(() => {
      setShareHover(false);
    }, 4000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heart}>
        <span>
          <Image
            onClick={() => setHeartActive(!heartActive)}
            width={27}
            height={24}
            src={heartActive ? HeartAcrive : Heart}
            alt="heart"
          />
        </span>
      </div>
      <div className={styles.share}>
        <span onMouseOver={handleMouseOver}>
          <Image width={24} height={24} src={Share} alt="sahre" />
        </span>
        <ul
          style={{ display: shareHover ? "flex" : "none" }}
          className={styles.share_icons}
        >
          <li>
            <Link href={"#/"}>
              <Image width={25} height={25} src={fbBlack} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link href={"#/"}>
              <Image width={25} height={25} src={google} alt="google" />
            </Link>
          </li>
          <li>
            <Link href={"#/"}>
              <Image width={25} height={25} src={copyLink} alt="copy link" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialButtons;
