import React from "react";
import styles from "./Business.module.css";
import HomeMenu from "@/components/HomeMenu";
import Featured from "@/components/Featured";
import AllEvents from "@/components/AllEvents";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <HomeMenu />
          <div className={styles.container}></div>
          <Featured data={1} />
          <AllEvents filter={true} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
