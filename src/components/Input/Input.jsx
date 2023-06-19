"use client";
import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  let mainInput;

  switch (props.type) {
    case "textarea":
      mainInput = (
        <textarea
          className={`${inputValue.length != 0 ? styles.active_input : ""} ${
            props?.className
          } `}
          // type={"text"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...props}
        />
      );
      break;
    case "select":
      mainInput = (
        <select
          id={props.id || ""}
          className={`${inputValue.length != 0 ? styles.active_input : ""}${
            props?.className || ""
          } `}
          onChange={(e) => setInputValue(e.target.value)}
        >
          {props.option?.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      );
      break;
    default:
      mainInput = (
        <input
          autoComplete="false"
          className={`${inputValue.length != 0 ? styles.active_input : ""}${
            props?.className || ""
          } `}
          type={"text"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...props}
        />
      );
  }

  return (
    <div className={styles.group}>
      {mainInput}
      <label htmlFor="">{props.text}</label>
      <i className={styles.bar}></i>
    </div>
  );
};

export default Input;
