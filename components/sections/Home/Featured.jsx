import React from "react";
import styles from "../../../styles/sections/Home/featured.module.scss";
import ProductCard from "../../layouts/ProductCard";

function Featured() {
  return (
    <section className={styles.featured}>
      <h2>KIEMELT TERMÉKEK</h2>
      <section className={styles.card_container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </section>
  );
}

export default Featured;
