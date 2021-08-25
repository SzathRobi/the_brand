import React from "react";
import Image from "next/image";
import styles from "../../../styles/sections/Shop/shop_landing.module.scss";
//import shop_landing from "../../../"

function ShopLanding() {
  return (
    <section className={styles.shop_landing}>
      <div className={styles.img_container}>
        <Image
          src="/imgs/shop_landing.jpg"
          alt="egymás mellé helyezett kézzel készült agyagedények"
          layout="fill"
        />
      </div>
      <article className={styles.intro}>
        <div className={styles.blurry} />
        <h1>Vigyél egy kis változatosságot az otthonodba!</h1>
      </article>
    </section>
  );
}

export default ShopLanding;
