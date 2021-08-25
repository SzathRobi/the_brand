import React from "react";
import ProductCard from "../../layouts/ProductCard";
import styles from "../../../styles/sections/Shop/product_list.module.scss";

function ProductList() {
  const card_color = {
    backgroundColor: "#9f666f",
  };
  return (
    <section className={styles.product_list}>
      <ProductCard style={card_color} />
      <ProductCard style={card_color} />
      <ProductCard style={card_color} />
    </section>
  );
}

export default ProductList;
