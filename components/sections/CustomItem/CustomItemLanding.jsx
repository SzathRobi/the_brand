import React from "react";
import Image from "next/image";
import styles from "../../../styles/sections/CustomItem/custom_item_landing.module.scss";

function CustomItemLanding() {
  return (
    <section className={styles.custom_item_landing}>
      <div className={styles.img_container}>
        <Image
          src="/imgs/custom_item_landing.jpg"
          alt="majd lesz"
          objectFit="cover"
          layout="fill"
        />
        <div className={styles.title}>
          <h1>Ön Kitalálja, Én Elkészítem</h1>
        </div>
      </div>

      <article className={styles.intro}>
        <h2>Mi is ez pontosan?</h2>
        <p>
          Van egy jó ötleted? Esetleg keresel valamit már nagyon rég óta de
          sehol nem találod? Oszd meg velem, és én elkészítem a személyre szóló,
          egyedi terméket, legyen az neked vagy épp a tökéletes ajándék egy
          barátodnak.
        </p>
      </article>
    </section>
  );
}

export default CustomItemLanding;
