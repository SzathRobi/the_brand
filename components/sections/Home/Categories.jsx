import React from "react";
import Image from "next/image";
import clay_cups from "../../../public/imgs/clay_cups.jpg";
import leather_material from "../../../public/imgs/leather_material.jpg";
import landing_wave from "../../../public/imgs/landing_wave.svg";
import styles from "../../../styles/sections/Home/categories.module.scss";

function Categories() {
  return (
    <section className={styles.categories}>
      <h2>KATEGÓRIÁK</h2>
      <article className={styles.card_container}>
        <div className={styles.card}>
          <Image src={clay_cups} alt="Agyag" width={250} height={300} />
          <h3>AGYAG</h3>
          <ul className={styles.items}>
            <li>Tányér</li>
            <li>Edény</li>
            <li>Bögre</li>
            <li>Csillagromboló</li>
          </ul>
        </div>
        <div className={styles.card}>
          <Image src={leather_material} alt="Bőr" width={250} height={300} />
          <h3>BŐR</h3>
          <ul className={styles.items}>
            <li>Táska</li>
            <li>Szütyő</li>
            <li>Egyéb</li>
            <li>Csak Bőr</li>
          </ul>
        </div>
      </article>
      <div className={styles.wave_container}>
        <Image
          className={styles.wave}
          src={landing_wave}
          alt="dekorációs elem"
        />
      </div>
    </section>
  );
}

export default Categories;
