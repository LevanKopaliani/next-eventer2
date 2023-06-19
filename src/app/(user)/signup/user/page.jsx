"use client";
import React, { useState } from "react";
import styles from "./UserSignup.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";

const page = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.user_signup}>
      <div className={styles.caption}>
        <h3>Sign Up as User</h3>
      </div>
      <div className={styles.card}>
        <form action="">
          <Input text={"Name, Surname*"} />
          <Input text={"Email *"} type={"email"} />
          <Input text={"ID card Number*"} />
          <Input
            text={"Country"}
            type={"select"}
            option={["Georgia", "Andora", "Armenia", "Spain"]}
            selected={"Georgia"}
          />
          <Input text={"Phone Number*"} />
          <div className={styles.group}>
            <Input text={"Date of Birth"} type={"date"} />
            <Input
              text={"Gender"}
              type={"select"}
              option={["Male", "Female"]}
              selected={"Male"}
            />
          </div>
          <div className={styles.group}>
            <Input text={"Password*"} type={"password"} />
            <Input text={"Repeat Password*"} type={"password"} />
          </div>
          <div className={styles.submit}>
            <h4>
              By signing up I accept{" "}
              <span onClick={() => setOpenModal(true)}>TERMS & CONDITIONS</span>
            </h4>
            <Button className={styles.btn} text={"Sign up"} />
            <Modal
              openModal={openModal}
              onCloseModal={() => setOpenModal(false)}
            >
              Please read the following terms and conditions carefully. By using
              this site and by registering to buy tickets via it you will be
              deemed to have accepted all relevant terms and conditions.
            </Modal>
          </div>
        </form>
        <div className={styles.fb_login}>
          <button>SIGN IN WITH FACEBOOK </button>
        </div>
        <h4 className={styles.signup}>
          Already an user? <a href="/login">Sign In</a>
        </h4>
      </div>
    </div>
  );
};

export default page;
