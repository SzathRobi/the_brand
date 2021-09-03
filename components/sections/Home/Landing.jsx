import React from "react";
import Image from "next/image";
import landingImage from "../../../public/imgs/landing.jpg";
import landing_wave from "../../../public/imgs/landing_wave.svg";
import styles from "../../../styles/sections/Home/landing.module.scss";
import Button from "../../controls/Button";

function Landing() {
  const secondary_cta = {
    backgroundColor: "#fff",
  };

  const wave = {
    position: "absolute",
    top: 0,
  };

  return (
    <div className={styles.landing}>
      <Image
        className={styles.img}
        src={landingImage}
        layout="fill"
        objectFit="cover"
        alt="agyag formázás"
        placeholder="blur"
      />
      <div className={styles.backdrop} />
      <article className={styles.intro}>
        <h1>Szuper Duper Besza Behu Hobo Loco Promo Bro Szöveg</h1>
        <div className={styles.cta_container}>
          <Button className={styles.secondary_cta}>EGYEDI TERMÉK</Button>
          <Button>TERMÉKEK</Button>
        </div>
      </article>
      <div className={styles.wave_container}>
        <Image
          className={styles.wave}
          src={landing_wave}
          alt="dekorációs elem"
        />
      </div>
    </div>
  );
}

export default Landing;
