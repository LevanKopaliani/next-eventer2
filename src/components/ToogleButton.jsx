import React from "react";
import styles from "../Styles/ToogleButton.module.css";

const ToogleButton = (props) => {
  return (
    <div className={`${styles.toogle} ${props.className}`}>
      <p>events</p>
      <div className={styles.container}>
        <input type="checkbox" id="toogle" className={styles.input} />
        <label
          htmlFor="toogle"
          className={styles.label}
          onClick={props.onClick}
        ></label>
      </div>
      <p>map</p>
    </div>
  );
};

export default ToogleButton;
