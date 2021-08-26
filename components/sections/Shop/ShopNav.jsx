import React from "react";
import styles from "../../../styles/sections/Shop/shop_nav.module.scss";

function ShopNav() {
  return (
    <section className={styles.shop_nav}>
      <form>
        <label>
          <input type="text" placeholder="KERESÉS..." />
        </label>
        <article className={styles.btn_container}>
          <select>
            <option value="all">ÖSSZES</option>
            <option value="all">AGYAG</option>
            <option value="all">BŐR</option>
          </select>
          <select>
            <option value="all">CSÖKKENŐ ÁR</option>
            <option value="all">NÖVEKVŐ ÁR</option>
            <option value="all">A-Z</option>
            <option value="all">Z-A</option>
          </select>
          {/* <select>
              <option value="all">VEGÁN</option>
              <option value="all">ÁLLATKÍNZÓS</option>
            </select> */}
        </article>
      </form>
    </section>
  );
}

export default ShopNav;
