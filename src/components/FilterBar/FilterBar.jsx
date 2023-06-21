import React, { useEffect, useState } from "react";
import styles from "./FilterBar.module.css";

const FilterBar = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [popular, setPopular] = useState(false);
  const [weekend, setWeekend] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpenFilter(true), 3000);
  }, []);
  return (
    <>
      <div className={styles.filter}>
        <div
          className={
            openFilter
              ? `${styles.filter_menu} ${styles.filter_visible}`
              : styles.filter_menu
          }
        >
          <ul>
            <li>Date</li>
            <li
              onClick={() => setPopular(!popular)}
              className={popular ? styles.filter_active : null}
            >
              Most Popular
            </li>
            <li
              onClick={() => setWeekend(!weekend)}
              className={weekend ? styles.filter_active : null}
            >
              This Weekend
            </li>
          </ul>
        </div>
      </div>
      <button
        className={
          openFilter
            ? `${styles.fitler_button} ${styles.button_border}`
            : styles.fitler_button
        }
        onClick={() => setOpenFilter(!openFilter)}
      >
        Filter
      </button>
    </>
  );
};

export default FilterBar;
