"use client";
import React, { useState } from "react";
import styles from "../Styles/EventsMap.module.css";
import ToogleButton from "./ToogleButton";
import MapImage from "../assets/img/map.png";
import Image from "next/image";

const EventsMap = () => {
  const [openMap, setOpenMap] = useState(false);

  return (
    <section className={styles.events_map}>
      <div className={styles.switch_container}>
        <ToogleButton onClick={() => setOpenMap(!openMap)} />
      </div>
      <div
        style={{ height: openMap ? "500px" : "0px" }}
        className={styles.map_container}
      >
        <Image src={MapImage} alt="map" />
      </div>
    </section>
  );
};

export default EventsMap;
