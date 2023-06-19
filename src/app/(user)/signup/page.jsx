import React from "react";
import styles from "./SignUpPage.module.css";
import Image from "next/image";
import Link from "next/link";
import Headphone from "../../../assets/img/headphones.svg";
import Company from "../../../assets/img/company.svg";
import Button from "@/components/Button/Button";

const page = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.signup_caption}>
        <h3>SIGN UP AS A USER OR COMPANY</h3>
      </div>
      <div className={styles.user_tab}>
        <Image src={Headphone} width={58} height={58} alt="user signup" />
        <h3>3ARE YOU A USER?</h3>
        <Link href={"/signup/user"}>
          <Button text={"Sign Up as User"} />
        </Link>
      </div>
      <div className={styles.company_tab}>
        <Image src={Company} width={58} height={51} alt="Company signup" />
        <h3>ARE YOU A COMPANY?</h3>
        <Link href={"/signup/company"}>
          <Button text={"Sign Up as Company"} />
        </Link>
      </div>
    </div>
  );
};

export default page;
