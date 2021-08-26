import React from "react";
import Image from "next/image";
import styles from "../styles/sections/CustomItem/custom_item.module.scss";
import CustomItemLanding from "../components/sections/CustomItem/CustomItemLanding";
import CustomItemOptions from "../components/sections/CustomItem/CustomItemOptions";

function CustomItem() {
  return (
    <section className={styles.custom_item}>
      <CustomItemLanding />
      <CustomItemOptions />
    </section>
  );
}

export default CustomItem;
