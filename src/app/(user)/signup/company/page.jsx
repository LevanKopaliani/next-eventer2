"use client";
import React, { useEffect, useState } from "react";
import styles from "./CompanySignup.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import DefaultImage from "../../../../assets/img/100x100.png";
import Image from "next/image";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);
  // Logo
  const [avatarImg, setAvatarImg] = useState(null);
  const [preview, setPreview] = useState(null);
  ///
  const handleAvatarInput = (e) => {
    const file = e.target.files[0];
    setAvatarImg(file);
  };
  ////

  useEffect(() => {
    if (avatarImg) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setPreview(result);
      };

      reader.readAsDataURL(avatarImg);
    } else {
      setPreview(null);
    }
  }, [avatarImg]);
  /////

  /* onsubmit Form  */

  return (
    <div className={styles.company_signup}>
      <div className={styles.caption}>
        <h3>Sign Up as Company</h3>
      </div>
      <div className={styles.card}>
        <form action="">
          <Input text={"Brand Name*"} />
          <Input text={"Brand Address"} />
          <div className={styles.input_group}>
            <label htmlFor="brand_logo" className={styles.label}>
              Brand Logo
            </label>
            <input
              onChange={handleAvatarInput}
              type="file"
              name="brand_logo"
              id="brand_logo"
              accept="image/*"
              className={styles.logo_input}
            />
            <div className={styles.preview}>
              <label htmlFor="brand_logo">
                <Image
                  src={preview ? preview : DefaultImage}
                  width={100}
                  height={100}
                  alt="brand logo"
                />
              </label>
            </div>
          </div>
          <Input text={"Email *"} type={"email"} />
          <Input text={"ID card Number*"} />
          <Input text={"Phone Number*"} />
          <Input text={"Name & Surname*"} />
          <Input text={"Name & Surname of CEO*"} />
          <Input text={"LLC Name In Georgian*"} />
          <div className={styles.group}>
            <Input text={"Identification Code"} />
            <Input text={"IBAN"} />
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

        <h4 className={styles.signup}>
          Already an user? <a href="/login">Sign In</a>
        </h4>
      </div>
    </div>
  );
};

export default Page;
