import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button {...props} className={`${props.className || ""} ${styles.btn} `}>
      {props.text}
    </button>
  );
};

export default Button;
