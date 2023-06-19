"use client";
import React from "react";
import styles from "./LoginPage.module.css";

import Input from "@/components/Input/Input";
import Link from "next/link";

const page = (props) => {
  return (
    <div className={styles.signin}>
      <div className={styles.signin_caption}>
        <h3>SIGN IN TO YOUR ACCOUNT</h3>
        <p>
          Please, enter your e-mail address and password or use Facebook
          authentication
        </p>
      </div>
      <div className={styles.card}>
        <form action="">
          <Input type={"email"} text={"Email"} />
          <Input type={"password"} text={"Password"} />
          <div className={styles.submit}>
            <Link href={"/#"}>Forgot password?</Link>
            <button>Sign in</button>
          </div>
        </form>
        <div className={styles.fb_login}>
          <button>SIGN IN WITH FACEBOOK </button>
        </div>
      </div>
      <h4 className={styles.signup}>
        Still not an user? <a href="/#">Sign up</a>
      </h4>
    </div>
  );
};

export default page;
