import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button {...props} className={`${styles.btn} ${props.className || ""} `}>
      {props.text}
    </button>
  );
};

export default Button;
