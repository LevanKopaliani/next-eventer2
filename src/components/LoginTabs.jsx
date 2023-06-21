"use client";
import React from "react";
import styles from "../Styles/LoginTabs.module.css";
import { usePathname } from "next/navigation";

const LoginTabs = () => {
  const path = usePathname().split("/");

  return (
    <div className={styles.login_tabs}>
      <ul>
        <li style={{ color: path[1] === "login" ? "#fe4e6e" : "" }}>
          <a href="/login">Sign in</a>
        </li>
        <span>/</span>
        <li style={{ color: path[1] === "signup" ? "#fe4e6e" : "" }}>
          <a href="/signup">Sign up</a>
        </li>
      </ul>
    </div>
  );
};

export default LoginTabs;
