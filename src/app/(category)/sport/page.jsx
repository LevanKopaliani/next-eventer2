import React from "react";
import styles from "./Sport.module.css";
import Footer from "@/components/Footer";
import HomeMenu from "@/components/HomeMenu";
import AllEvents from "@/components/AllEvents";
import Featured from "@/components/Featured";

const page = () => {
  //// pass data or data length (featured)
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <HomeMenu />
          <div className={styles.container}></div>
          {/* <Featured data={0} /> */}
          <AllEvents filter={true} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
