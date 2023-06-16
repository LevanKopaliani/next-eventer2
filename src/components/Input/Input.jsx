"use client";
import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const mainInput =
    props.type === "textarea" ? (
      <textarea
        className={`${inputValue.length != 0 ? styles.active_input : ""} ${
          props?.className
        } `}
        type={props.type || "text"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...props}
      />
    ) : (
      <input
        className={`${inputValue.length != 0 ? styles.active_input : ""} ${
          props?.className
        } `}
        type={props.type || "text"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...props}
      />
    );

  return (
    <div className={styles.group}>
      {mainInput}
      <label htmlFor="">{props.text || "text"}</label>
      <i className={styles.bar}></i>
    </div>
  );
};

export default Input;
