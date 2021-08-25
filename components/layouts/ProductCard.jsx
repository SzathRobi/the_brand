import React from "react";
import Image from "next/image";
import styles from "../../styles/sections/Home/product_card.module.scss";
import Button from "../controls/Button";

function ProductCard({ img, name = "Csak Egy Termék", price = 13000, style }) {
  return (
    <article className={styles.product_card} style={style}>
      <Image src="/valami" alt="termék" width={250} height={250} />
      <h4>{name}</h4>
      <p>{price}Ft</p>
      <div className={styles.cta_container}>
        <Button className={styles.secondary_cta}>RÉSZLETEK</Button>
        <Button>KOSÁRBA</Button>
      </div>
    </article>
  );
}

export default ProductCard;
