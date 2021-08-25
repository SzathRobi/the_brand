import React from "react";
import ProductCard from "../../layouts/ProductCard";
import styles from "../../../styles/sections/Home/onsale.module.scss";

function OnSale() {
  const card_color = {
    backgroundColor: "#9f666f",
  };

  return (
    <section className={styles.on_sale}>
      <h2>AKCIÓS TERMÉKEK</h2>
      <section className={styles.card_container}>
        <ProductCard style={card_color} />
        <ProductCard style={card_color} />
        <ProductCard style={card_color} />
      </section>
    </section>
  );
}

export default OnSale;
