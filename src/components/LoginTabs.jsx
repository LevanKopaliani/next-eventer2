import React from "react";
import styles from "../Styles/LoginTabs.module.css";

const LoginTabs = () => {
  return (
    <div className={styles.login_tabs}>
      <ul>
        <li>
          <a href="/login">Sign in</a>
        </li>
        <span>/</span>
        <li>
          <a href="/signup">Sign up</a>
        </li>
      </ul>
    </div>
  );
};

export default LoginTabs;
