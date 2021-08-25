import React from "react";
import ProductList from "../components/sections/Shop/ProductList";
import ShopLanding from "../components/sections/Shop/ShopLanding";
import ShopNav from "../components/sections/Shop/ShopNav";

function bolt() {
  return (
    <section>
      <ShopLanding />
      <ShopNav />
      <ProductList />
    </section>
  );
}

export default bolt;
